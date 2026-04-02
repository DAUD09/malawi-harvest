/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react'
import { seedPrices } from '../data/prices'

const PriceContext = createContext()

export function PriceProvider({ children }) {
  // Load saved community reports from localStorage on first render
  const [reports, setReports] = useState(() => {
    try {
      const saved = localStorage.getItem('mh_community_reports')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  // Sync to localStorage whenever reports change
  useEffect(() => {
    localStorage.setItem('mh_community_reports', JSON.stringify(reports))
  }, [reports])

  const addReport = (report) => {
    // Prepend so newest reports appear first
    setReports(prev => [{ ...report, id: Date.now().toString() }, ...prev])
  }

  const deleteReport = (id) => {
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