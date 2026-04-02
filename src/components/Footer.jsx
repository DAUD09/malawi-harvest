import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--color-border)',
      padding: '16px 24px',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '8px',
    }}>
      <p style={{ fontSize: '11px', color: 'var(--color-muted)' }}>
        © {new Date().getFullYear()} MalawiHarvest · Built in Blantyre, Malawi 🌽
      </p>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Link to="/terms" style={{ fontSize: '11px', color: 'var(--color-muted)', textDecoration: 'none' }}>
          Terms
        </Link>
        <Link to="/privacy" style={{ fontSize: '11px', color: 'var(--color-muted)', textDecoration: 'none' }}>
          Privacy
        </Link>
        <a href="https://github.com/DAUD09/malawi-harvest"
          target="_blank" rel="noopener noreferrer"
          style={{ fontSize: '11px', color: 'var(--color-muted)', textDecoration: 'none' }}>
          GitHub
        </a>
      </div>
    </footer>
  )
}