import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import { translations } from '../data/translations'

const NAV_ITEMS = [
  { path: '/prices',     icon: '📊', key: 'prices'    },
  { path: '/calculator', icon: '🧮', key: 'calculate' },
  { path: '/calendar',   icon: '📅', key: 'calendar'  },
  { path: '/report',     icon: '📢', key: 'report'    },
]

export default function BottomNav() {
  const { lang } = useLang()
  const t = translations[lang]
  const location = useLocation()

  return (
    <nav className="bottom-nav-mobile" style={{
      position: 'fixed', bottom: 0,
      left: '50%', transform: 'translateX(-50%)',
      width: '100%', maxWidth: '430px',
      background: 'var(--color-card)',
      borderTop: '1px solid var(--color-border)',
      display: 'flex', justifyContent: 'space-around',
      padding: '8px 0 10px', zIndex: 40,
    }}>
      {NAV_ITEMS.map(({ path, icon, key }) => {
        // Treat both '/' and '/prices' as the Prices tab being active
        const isActive = location.pathname === path ||
          (path === '/prices' && location.pathname === '/')
        return (
          <Link key={key} to={path} style={{
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: '3px',
            textDecoration: 'none', minWidth: '56px',
            color: isActive ? 'var(--color-terracotta)' : 'var(--color-muted)',
            fontSize: '10px', fontWeight: isActive ? 600 : 400,
          }}>
            <span style={{ fontSize: '18px', lineHeight: 1 }}>{icon}</span>
            <span>{t.nav[key]}</span>
          </Link>
        )
      })}
    </nav>
  )
}