import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import { translations } from '../data/translations'
import { useIsDesktop } from '../hooks/useIsDesktop'

export default function Navbar() {
  const { lang, toggle } = useLang()
  const t = translations[lang]
  const isDesktop = useIsDesktop()

  return (
    <header style={{
      background: 'var(--color-soil)',
      position: 'sticky', top: 0, zIndex: 50,
      borderBottom: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{
        // On desktop: full-width with generous padding
        // On mobile: natural padding
        padding: isDesktop ? '13px 28px' : '12px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: isDesktop ? 'flex-start' : 'space-between',
        gap: isDesktop ? '0' : undefined,
      }}>
        <Link to="/" style={{ textDecoration: 'none', flex: isDesktop ? 1 : undefined }}>
          <span style={{
            fontFamily: 'var(--font-heading)', fontSize: '20px',
            fontWeight: 700, color: 'var(--color-gold)', letterSpacing: '-0.3px',
          }}>
            Malawi
          </span>
          <span style={{
            fontFamily: 'var(--font-heading)', fontSize: '20px',
            fontWeight: 400, color: '#FDF6EC',
          }}>
            Harvest
          </span>
        </Link>

        {isDesktop && (
          <p style={{ fontSize: '13px', color: 'rgba(253,246,236,0.35)', flex: 1, textAlign: 'center' }}>
            {t.tagline}
          </p>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: isDesktop ? 1 : undefined, justifyContent: 'flex-end' }}>
          <button
            onClick={toggle}
            style={{
              background: 'rgba(253,246,236,0.1)',
              border: '1px solid rgba(253,246,236,0.2)',
              color: '#FDF6EC',
              fontSize: '12px', fontWeight: 500,
              padding: '5px 14px', borderRadius: '20px', cursor: 'pointer',
            }}
          >
            {lang === 'en' ? 'Chi' : 'EN'}
          </button>
        </div>
      </div>
    </header>
  )
}