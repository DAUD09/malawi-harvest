import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import { translations } from '../data/translations'

const NAV_ITEMS = [
  { path: '/prices',     icon: '📊', key: 'prices'    },
  { path: '/calculator', icon: '🧮', key: 'calculate' },
  { path: '/calendar',   icon: '📅', key: 'calendar'  },
  { path: '/report',     icon: '📢', key: 'report'    },
]

export default function SidebarNav() {
  const { lang } = useLang()
  const t = translations[lang]
  const location = useLocation()

  return (
    <aside style={{
      width: '220px',
      flexShrink: 0,
      background: 'var(--color-card)',
      borderRight: '1px solid var(--color-border)',
      padding: '20px 12px',
      position: 'sticky',
      top: '57px',
      height: 'calc(100vh - 57px)',
      overflowY: 'auto',
    }}>
      <p style={{
        fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em',
        textTransform: 'uppercase', color: 'var(--color-muted)',
        padding: '0 12px', marginBottom: '8px',
      }}>
        Navigation
      </p>

      {NAV_ITEMS.map(({ path, icon, key }) => {
        const isActive = location.pathname === path ||
          (path === '/prices' && location.pathname === '/')
        return (
          <Link key={key} to={path} style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            padding: '10px 12px', borderRadius: '8px',
            textDecoration: 'none', marginBottom: '2px',
            fontSize: '14px', fontWeight: isActive ? 600 : 400,
            color: isActive ? 'var(--color-terracotta)' : 'var(--color-soil)',
            background: isActive ? 'rgba(193,68,14,0.07)' : 'transparent',
            transition: 'background 0.15s',
          }}>
            <span style={{ fontSize: '16px', width: '20px', textAlign: 'center' }}>{icon}</span>
            {t.nav[key]}
          </Link>
        )
      })}

      {/* Bottom of sidebar: data disclaimer */}
      <div style={{
        position: 'absolute', bottom: '20px', left: '12px', right: '12px',
        padding: '10px 12px',
        background: 'rgba(193,68,14,0.05)',
        border: '1px solid rgba(193,68,14,0.15)',
        borderRadius: '8px',
      }}>
        <p style={{ fontSize: '10px', color: 'var(--color-muted)', lineHeight: 1.6 }}>
          Reference prices from ADMARC/ACE historical data. Report prices from your market to help other farmers.
        </p>
      </div>
    </aside>
  )
}