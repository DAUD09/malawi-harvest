import { useState } from 'react'
import { useLang } from '../context/LanguageContext'
import { translations } from '../data/translations'
import { crops } from '../data/crops'
import { calendarData, monthNames, statusConfig } from '../data/calendar'

export default function Calendar() {
  const { lang } = useLang()
  const t = translations[lang].calendar
  const [cropId, setCropId] = useState('maize')

  const data = calendarData[cropId]
  const crop = crops.find(c => c.id === cropId)

  return (
    <div className="mh-page">
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', marginBottom: '4px' }}>{t.title}</h2>
      <p style={{ fontSize: '13px', color: 'var(--color-muted)', marginBottom: '16px' }}>{t.subtitle}</p>

      {/* Crop selector */}
      <select
        value={cropId} onChange={e => setCropId(e.target.value)}
        style={{
          background: 'var(--color-card)', border: '1px solid var(--color-border)',
          borderRadius: '8px', padding: '10px 12px', fontSize: '14px',
          color: 'var(--color-soil)', width: '100%', marginBottom: '20px',
          appearance: 'none', WebkitAppearance: 'none',
        }}
      >
        {crops.map(c => <option key={c.id} value={c.id}>{c.name[lang]}</option>)}
      </select>

      {data && (
        <>
          {/* 6-column month grid (two rows of 6) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '4px', marginBottom: '16px' }}>
            {data.months.map((status, idx) => {
              const cfg = statusConfig[status]
              return (
                <div key={idx} style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '10px', color: 'var(--color-muted)', marginBottom: '4px' }}>
                    {monthNames[lang][idx]}
                  </p>
                  <div style={{
                    height: '36px', borderRadius: '6px', background: cfg.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '11px', fontWeight: 700, color: '#fff',
                  }}>
                    {cfg.short}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Legend */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
            {Object.entries(statusConfig).map(([key, cfg]) => (
              <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', color: 'var(--color-muted)' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: cfg.color }} />
                {cfg.label[lang]}
              </div>
            ))}
          </div>

          {/* Tip card with crop's accent color on the left border */}
          <div style={{
            background: 'var(--color-card)',
            border: '1px solid var(--color-border)',
            borderLeft: `4px solid ${crop?.color ?? 'var(--color-terracotta)'}`,
            borderRadius: '0 10px 10px 0',
            padding: '14px',
          }}>
            <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>
              {t.tip}
            </p>
            <p style={{ fontSize: '13px', color: 'var(--color-soil)', lineHeight: 1.65 }}>
              {data.tip[lang]}
            </p>
          </div>
        </>
      )}
    </div>
  )
}