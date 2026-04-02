import { useState } from 'react'
import { useLang } from '../context/LanguageContext'
import { translations } from '../data/translations'
import { usePrices } from '../context/PriceContext'
import { crops } from '../data/crops'

export default function Calculator() {
  const { lang } = useLang()
  const t = translations[lang].calculator
  const { seedPrices } = usePrices()
  const [amount, setAmount] = useState('')
  const [unit, setUnit] = useState('kg')        // 'kg' or 'bags'
  const [cropId, setCropId] = useState('')

  // 1 bag = 50 kg (standard Malawi maize bag size)
  const totalKg = unit === 'bags' ? Number(amount) * 50 : Number(amount)

  // All entries for the selected crop, sorted highest price first
  const cropPrices = cropId
    ? seedPrices.filter(p => p.cropId === cropId).sort((a, b) => b.priceKg - a.priceKg)
    : []

  const hasResults = cropPrices.length > 0 && totalKg > 0
  const best = hasResults ? cropPrices[0] : null

  const inputBase = {
    background: 'var(--color-bg)', border: '1px solid var(--color-border)',
    borderRadius: '8px', padding: '10px 12px', fontSize: '16px',
    color: 'var(--color-soil)', width: '100%',
  }

  const labelStyle = {
    display: 'block', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase',
    letterSpacing: '0.06em', color: 'var(--color-muted)', marginBottom: '6px',
  }

  return (
    <div style={{ padding: '16px' }}>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', marginBottom: '4px' }}>{t.title}</h2>
      <p style={{ fontSize: '13px', color: 'var(--color-muted)', marginBottom: '20px', lineHeight: 1.5 }}>{t.subtitle}</p>

      {/* Crop */}
      <label style={labelStyle}>{t.cropLabel}</label>
      <select
        value={cropId} onChange={e => setCropId(e.target.value)}
        style={{ ...inputBase, marginBottom: '16px', appearance: 'none', WebkitAppearance: 'none' }}
      >
        <option value="">— {t.cropLabel} —</option>
        {crops.map(c => <option key={c.id} value={c.id}>{c.name[lang]}</option>)}
      </select>

      {/* Amount + unit toggle */}
      <label style={labelStyle}>{t.amountLabel}</label>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <input
          type="number" value={amount} onChange={e => setAmount(e.target.value)}
          placeholder="0" min="0"
          style={{ ...inputBase, flex: 1 }}
        />
        {/* kg / bags toggle */}
        <div style={{ display: 'flex', border: '1px solid var(--color-border)', borderRadius: '8px', overflow: 'hidden' }}>
          {['kg', 'bags'].map(u => (
            <button key={u} onClick={() => setUnit(u)} style={{
              padding: '10px 14px', fontSize: '13px', fontWeight: 500, border: 'none', cursor: 'pointer',
              background: unit === u ? 'var(--color-soil)' : 'var(--color-card)',
              color: unit === u ? '#FDF6EC' : 'var(--color-muted)',
            }}>
              {u === 'kg' ? t.kg : t.bags}
            </button>
          ))}
        </div>
      </div>

      {/* Total kg indicator */}
      {totalKg > 0 && (
        <div style={{
          background: 'rgba(233,168,32,0.08)', border: '1px solid rgba(233,168,32,0.25)',
          borderRadius: '8px', padding: '10px 14px', marginBottom: '20px', fontSize: '13px',
        }}>
          {t.totalKg}: <strong>{totalKg.toLocaleString()} kg</strong>
        </div>
      )}

      {/* Results */}
      {hasResults ? (
        <>
          {/* Best market card */}
          <div style={{
            background: 'var(--color-soil)', borderRadius: '12px', padding: '14px',
            marginBottom: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <div>
              <p style={{ fontSize: '10px', color: 'rgba(253,246,236,0.5)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '3px' }}>
                {t.bestMarket}
              </p>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', color: '#FDF6EC', marginBottom: '2px' }}>
                {best.market}
              </p>
              <p style={{ fontSize: '11px', color: 'rgba(253,246,236,0.5)' }}>
                MK {best.priceKg.toLocaleString()}/kg
              </p>
            </div>
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', fontWeight: 700, color: 'var(--color-gold)' }}>
              MK {(totalKg * best.priceKg).toLocaleString()}
            </p>
          </div>

          {/* All markets ranked */}
          <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
            {t.resultsTitle}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {cropPrices.map((entry, i) => {
              const isBest = i === 0
              const total = totalKg * entry.priceKg
              return (
                <div key={entry.id} style={{
                  background: isBest ? 'rgba(233,168,32,0.07)' : 'var(--color-card)',
                  border: `1px solid ${isBest ? 'rgba(233,168,32,0.3)' : 'var(--color-border)'}`,
                  borderRadius: '8px', padding: '10px 12px',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                  <div>
                    <p style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-soil)' }}>{entry.district}</p>
                    <p style={{ fontSize: '11px', color: 'var(--color-muted)' }}>
                      {entry.market} · MK {entry.priceKg.toLocaleString()}/kg
                    </p>
                  </div>
                  <p style={{ fontWeight: 600, fontSize: '15px', color: isBest ? 'var(--color-gold)' : 'var(--color-soil)' }}>
                    MK {total.toLocaleString()}
                  </p>
                </div>
              )
            })}
          </div>
        </>
      ) : (
        <p style={{ color: 'var(--color-muted)', fontSize: '13px', textAlign: 'center', padding: '40px 0' }}>
          {t.noResults}
        </p>
      )}
    </div>
  )
}