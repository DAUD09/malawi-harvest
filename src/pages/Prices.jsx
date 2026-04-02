import { useState } from 'react'
import { useLang } from '../context/LanguageContext'
import { translations } from '../data/translations'
import { usePrices } from '../context/PriceContext'
import { crops } from '../data/crops'
import { districts } from '../data/prices'
import PriceCard from '../components/PriceCard'

export default function Prices() {
  const { lang } = useLang()
  const t = translations[lang]
  const { seedPrices } = usePrices()
  const [selectedCrop, setSelectedCrop] = useState('all')
  const [selectedDistrict, setSelectedDistrict] = useState('all')

  const filtered = seedPrices.filter(p =>
    (selectedCrop === 'all' || p.cropId === selectedCrop) &&
    (selectedDistrict === 'all' || p.district === selectedDistrict)
  )

  const sel = {
    background: 'var(--color-card)', border: '1px solid var(--color-border)',
    borderRadius: '8px', padding: '9px 10px', fontSize: '13px',
    color: 'var(--color-soil)', flex: 1, appearance: 'none', WebkitAppearance: 'none',
  }

  return (
    <div className="mh-page">
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', marginBottom: '12px' }}>
        {t.prices.title}
      </h2>

      {/* Filter row */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
        <select value={selectedCrop} onChange={e => setSelectedCrop(e.target.value)} style={sel}>
          <option value="all">{t.prices.allCrops}</option>
          {crops.map(c => <option key={c.id} value={c.id}>{c.name[lang]}</option>)}
        </select>
        <select value={selectedDistrict} onChange={e => setSelectedDistrict(e.target.value)} style={sel}>
          <option value="all">{t.prices.allDistricts}</option>
          {districts.map(d => <option key={d} value={d}>{d}</option>)}
        </select>
      </div>

      <p style={{ fontSize: '11px', color: 'var(--color-muted)', marginBottom: '12px' }}>
        {filtered.length} {lang === 'en' ? 'prices' : 'mitengo'} · {t.prices.thisWeek}
      </p>

      {filtered.length > 0 ? (
        <div className="mh-grid">
          {filtered.map(entry => <PriceCard key={entry.id} priceEntry={entry} />)}
        </div>
      ) : (
        <p style={{ color: 'var(--color-muted)', fontSize: '14px', textAlign: 'center', padding: '40px 0' }}>
          {t.prices.noResults}
        </p>
      )}

      <p style={{ fontSize: '11px', color: 'var(--color-muted)', marginTop: '20px', lineHeight: 1.6, borderTop: '1px solid var(--color-border)', paddingTop: '12px' }}>
        {t.prices.disclaimer}
      </p>
    </div>
  )
}