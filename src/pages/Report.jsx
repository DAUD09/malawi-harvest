import { useState } from 'react'
import { useLang } from '../context/LanguageContext'
import { translations } from '../data/translations'
import { usePrices } from '../context/PriceContext'
import { crops } from '../data/crops'
import { districts } from '../data/prices'

export default function Report() {
  const { lang } = useLang()
  const t = translations[lang].report
  const { reports, addReport, deleteReport } = usePrices()

  const [form, setForm] = useState({ cropId: '', district: '', market: '', priceKg: '' })
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = () => {
    if (!form.cropId || !form.district || !form.priceKg) return
    addReport({ ...form, priceKg: Number(form.priceKg), date: new Date().toLocaleDateString() })
    setForm({ cropId: '', district: '', market: '', priceKg: '' })
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3500)
  }

  const isValid = form.cropId && form.district && form.priceKg

  const inputBase = {
    background: 'var(--color-bg)', border: '1px solid var(--color-border)',
    borderRadius: '8px', padding: '10px 12px',
    fontSize: '14px', color: 'var(--color-soil)', width: '100%',
  }
  const labelStyle = {
    display: 'block', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase',
    letterSpacing: '0.06em', color: 'var(--color-muted)', marginBottom: '5px',
  }
  const field = { marginBottom: '14px' }

  return (
    <div className="mh-page">
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', marginBottom: '4px' }}>{t.title}</h2>
      <p style={{ fontSize: '13px', color: 'var(--color-muted)', marginBottom: '20px', lineHeight: 1.5 }}>{t.subtitle}</p>

      {/* Form card */}
      <div style={{ background: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '16px', marginBottom: '24px' }}>
        <div style={field}>
          <label style={labelStyle}>{t.cropLabel}</label>
          <select name="cropId" value={form.cropId} onChange={handleChange}
            style={{ ...inputBase, appearance: 'none', WebkitAppearance: 'none' }}>
            <option value="">— {t.cropLabel} —</option>
            {crops.map(c => <option key={c.id} value={c.id}>{c.name[lang]}</option>)}
          </select>
        </div>

        <div style={field}>
          <label style={labelStyle}>{t.districtLabel}</label>
          <select name="district" value={form.district} onChange={handleChange}
            style={{ ...inputBase, appearance: 'none', WebkitAppearance: 'none' }}>
            <option value="">— {t.districtLabel} —</option>
            {districts.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>

        <div style={field}>
          <label style={labelStyle}>{t.marketLabel}</label>
          <input type="text" name="market" value={form.market} onChange={handleChange}
            placeholder={t.marketPlaceholder} style={inputBase} />
        </div>

        <div style={field}>
          <label style={labelStyle}>{t.priceLabel}</label>
          <input type="number" name="priceKg" value={form.priceKg} onChange={handleChange}
            placeholder={t.pricePlaceholder} min="0" style={inputBase} />
        </div>

        <button onClick={handleSubmit} disabled={!isValid} style={{
          width: '100%',
          background: isValid ? 'var(--color-terracotta)' : '#D6C8B8',
          color: '#FDF6EC', border: 'none', borderRadius: '10px',
          padding: '13px', fontSize: '14px', fontWeight: 600,
          cursor: isValid ? 'pointer' : 'not-allowed',
        }}>
          {t.submit}
        </button>

        {showSuccess && (
          <div style={{
            marginTop: '12px', background: 'rgba(45,106,79,0.1)',
            border: '1px solid rgba(45,106,79,0.3)', borderRadius: '8px',
            padding: '10px 12px', fontSize: '13px', color: 'var(--color-forest)',
          }}>
            ✓ {t.successMsg}
          </div>
        )}
      </div>

      {/* Community reports list */}
      <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
        {t.recentTitle}
      </p>

      {reports.length === 0 ? (
        <p style={{ fontSize: '13px', color: 'var(--color-muted)', textAlign: 'center', padding: '24px 0' }}>
          {t.noReports}
        </p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {reports.map(r => {
            const crop = crops.find(c => c.id === r.cropId)
            return (
              <div key={r.id} style={{
                background: 'var(--color-card)', border: '1px solid var(--color-border)',
                borderRadius: '10px', padding: '12px',
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
              }}>
                <div>
                  <p style={{ fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 700, marginBottom: '2px' }}>
                    {crop?.name[lang] ?? r.cropId} — {r.district}
                  </p>
                  {r.market && <p style={{ fontSize: '11px', color: 'var(--color-muted)', marginBottom: '4px' }}>{r.market}</p>}
                  <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-terracotta)' }}>
                    MK {r.priceKg.toLocaleString()}/kg
                  </p>
                  <p style={{ fontSize: '10px', color: 'var(--color-muted)', marginTop: '3px' }}>
                    {t.reportedOn} {r.date}
                  </p>
                </div>
                <button onClick={() => deleteReport(r.id)} style={{
                  background: 'none', border: 'none',
                  color: 'var(--color-muted)', cursor: 'pointer', fontSize: '14px', padding: 0,
                }}>
                  ✕
                </button>
              </div>
            )
          })}
        </div>
      )}

      <p style={{ fontSize: '11px', color: 'var(--color-muted)', marginTop: '16px', lineHeight: 1.6, borderTop: '1px solid var(--color-border)', paddingTop: '12px' }}>
        {t.disclaimer}
      </p>
    </div>
  )
}