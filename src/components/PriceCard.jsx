import { crops } from '../data/crops'
import { useLang } from '../context/LanguageContext'
import { translations } from '../data/translations'

function calcTrendPct(current, last) {
  if (!last || last === 0) return 0
  return ((current - last) / last) * 100
}

export default function PriceCard({ priceEntry }) {
  const { lang } = useLang()
  const t = translations[lang]
  const crop = crops.find(c => c.id === priceEntry.cropId)
  if (!crop) return null

  const trendPct = calcTrendPct(priceEntry.priceKg, priceEntry.lastWeekKg)
  const isUp   = trendPct > 0.5   // small buffer to avoid showing ±0% as a trend
  const isDown = trendPct < -0.5

  return (
    <div style={{
      background: 'var(--color-card)',
      border: '1px solid var(--color-border)',
      borderRadius: '12px',
      padding: '14px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Crop accent bar on the left */}
      <div style={{
        position: 'absolute', top: 0, left: 0,
        width: '4px', height: '100%',
        background: crop.color,
        borderRadius: '12px 0 0 12px',
      }} />

      <div style={{ paddingLeft: '4px' }}>
        <p style={{ fontFamily: 'var(--font-heading)', fontSize: '15px', fontWeight: 700, color: 'var(--color-soil)', marginBottom: '1px' }}>
          {crop.name[lang]}
        </p>
        <p style={{ fontSize: '11px', color: 'var(--color-muted)', marginBottom: '10px' }}>
          {priceEntry.market}
        </p>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div>
            <p style={{ fontSize: '20px', fontWeight: 600, color: 'var(--color-soil)', lineHeight: 1 }}>
              MK {priceEntry.priceKg.toLocaleString()}
            </p>
            <p style={{ fontSize: '10px', color: 'var(--color-muted)', marginTop: '2px' }}>
              {t.prices.perKg}
            </p>
          </div>

          {(isUp || isDown) && (
            <div style={{
              display: 'flex', alignItems: 'center', gap: '2px',
              fontSize: '11px', fontWeight: 600,
              color: isUp ? 'var(--color-terracotta)' : 'var(--color-forest)',
            }}>
              <span style={{ fontSize: '12px' }}>{isUp ? '▲' : '▼'}</span>
              {Math.abs(trendPct).toFixed(0)}%
            </div>
          )}
        </div>
      </div>
    </div>
  )
}