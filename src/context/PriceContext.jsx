/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react'
import { seedPrices } from '../data/prices'

const PriceContext = createContext()

// ── Defensive loader ──────────────────────────────────────────────────────────
// Validates that what comes out of localStorage is actually an array of
// well-formed report objects. Malformed JSON or injected structures are dropped.
function loadReports() {
  try {
    const raw = localStorage.getItem('mh_community_reports')
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter(r =>
      r &&
      typeof r === 'object' &&
      typeof r.id === 'string' &&
      typeof r.cropId === 'string' &&
      typeof r.district === 'string' &&
      typeof r.priceKg === 'number' &&
      r.priceKg > 0 &&
      isFinite(r.priceKg)
    )
  } catch {
    return []
  }
}

// ── Input sanitizer ───────────────────────────────────────────────────────────
// Called before any report is saved. Returns a clean object or null if invalid.
function sanitizeReport(raw) {
  const cropId   = typeof raw.cropId   === 'string' ? raw.cropId.trim().slice(0, 50)   : ''
  const district = typeof raw.district === 'string' ? raw.district.trim().slice(0, 50) : ''
  const market   = typeof raw.market   === 'string' ? raw.market.trim().slice(0, 100)  : ''
  const date     = typeof raw.date     === 'string' ? raw.date.trim().slice(0, 20)     : ''
  const priceKg  = Number(raw.priceKg)

  // Reject if required fields are missing or price is invalid
  if (!cropId || !district) return null
  if (!isFinite(priceKg) || priceKg <= 0 || priceKg > 10_000_000) return null

  return { cropId, district, market, date, priceKg }
}

const MAX_REPORTS = 200

export function PriceProvider({ children }) {
  const [reports, setReports] = useState(loadReports)

  // Sync to localStorage whenever reports change
  useEffect(() => {
    try {
      localStorage.setItem('mh_community_reports', JSON.stringify(reports))
    } catch {
      // localStorage may be full or blocked — fail silently
    }
  }, [reports])

  const addReport = (rawReport) => {
    const clean = sanitizeReport(rawReport)
    if (!clean) return false   // caller can check return value if needed

    setReports(prev => {
      const next = [{ ...clean, id: Date.now().toString() }, ...prev]
      // Cap at 200 newest records
      return next.slice(0, MAX_REPORTS)
    })
    return true
  }

  const deleteReport = (id) => {
    if (typeof id !== 'string') return
    setReports(prev => prev.filter(r => r.id !== id))
  }

  return (
    <PriceContext.Provider value={{ seedPrices, reports, addReport, deleteReport }}>
      {children}
    </PriceContext.Provider>
  )
}

export function usePrices() {
  return useContext(PriceContext)
}