import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import { translations } from '../data/translations'
import { usePrices } from '../context/PriceContext'
import { useIsDesktop } from '../hooks/useIsDesktop'
import PriceCard from '../components/PriceCard'

const FEATURED_IDS = ['maize-blantyre', 'groundnut-lilongwe', 'soybean-mzuzu', 'pigeon_pea-zomba']

export default function Home() {
  const { lang } = useLang()
  const t = translations[lang]
  const { seedPrices } = usePrices()
  const isDesktop = useIsDesktop()

  const featured = FEATURED_IDS
    .map(id => seedPrices.find(p => p.id === id))
    .filter(Boolean)

  return (
    <div>
      {/* ── Hero: no wrapper, stretches full width of <main> ── */}
      <section style={{
        background: 'linear-gradient(160deg, var(--color-soil) 0%, #2D1E0F 100%)',
        padding: isDesktop ? '48px 40px 40px' : '28px 16px 24px',
      }}>
        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: isDesktop ? '36px' : '22px',
          fontWeight: 700,
          color: '#FDF6EC',
          lineHeight: 1.2,
          marginBottom: '8px',
          maxWidth: isDesktop ? '520px' : '260px',
        }}>
          {t.home.heroTitle}
        </h1>
        <p style={{
          fontFamily: 'var(--font-heading)',
          fontStyle: 'italic',
          fontSize: isDesktop ? '15px' : '13px',
          color: 'var(--color-gold)',
          marginBottom: '20px',
        }}>
          {t.home.heroSub}
        </p>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          fontSize: '11px', color: 'rgba(253,246,236,0.5)',
        }}>
          <span style={{
            width: '6px', height: '6px', borderRadius: '50%',
            background: 'var(--color-forest)', display: 'inline-block',
            animation: 'pulse 2s ease-in-out infinite',
          }} />
          {t.updatedToday} · Blantyre, Lilongwe, Zomba...
        </div>
      </section>

      {/* ── Content: padded and width-capped ── */}
      <div style={{
        padding: isDesktop ? '28px 40px' : '16px 16px 0',
        maxWidth: '960px',
      }}>

        {/* ── Featured prices ── */}
        <section style={{ marginBottom: '20px' }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', marginBottom: '12px',
          }}>
            <p style={{
              fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em',
              textTransform: 'uppercase', color: 'var(--color-muted)',
            }}>
              {t.home.featuredPrices}
            </p>
            <Link to="/prices" style={{
              fontSize: '12px', color: 'var(--color-terracotta)',
              textDecoration: 'none', fontWeight: 500,
            }}>
              {t.home.viewAll} →
            </Link>
          </div>
          <div className="mh-grid">
            {featured.map(entry => <PriceCard key={entry.id} priceEntry={entry} />)}
          </div>
        </section>

        {/* ── Calculator CTA ── */}
        <section style={{ paddingBottom: '16px' }}>
          <Link to="/calculator" style={{ textDecoration: 'none' }}>
            <div style={{
              background: 'var(--color-forest)',
              borderRadius: '12px',
              padding: isDesktop ? '20px 24px' : '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <div>
                <p style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: isDesktop ? '18px' : '15px',
                  fontWeight: 700, color: '#FDF6EC', marginBottom: '4px',
                }}>
                  {t.calculator.title}
                </p>
                <p style={{
                  fontSize: '13px', color: 'rgba(253,246,236,0.7)', lineHeight: 1.5,
                  maxWidth: isDesktop ? '480px' : undefined,
                }}>
                  {t.calculator.subtitle}
                </p>
              </div>
              <span style={{ fontSize: isDesktop ? '36px' : '28px', marginLeft: '16px' }}>🧮</span>
            </div>
          </Link>
        </section>

      </div>

      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }`}</style>
    </div>
  )
}