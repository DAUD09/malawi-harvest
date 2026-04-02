import { useIsDesktop } from '../hooks/useIsDesktop'

export default function PrivacyPolicy() {
  const isDesktop = useIsDesktop()

  return (
    <div style={{ padding: isDesktop ? '40px 48px' : '24px 16px', maxWidth: '760px' }}>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: isDesktop ? '32px' : '24px', marginBottom: '6px' }}>
        Privacy Policy
      </h1>
      <p style={{ fontSize: '13px', color: 'var(--color-muted)', marginBottom: '32px' }}>
        Last updated: April 2026
      </p>

      <Section title="Summary">
        <strong>MalawiHarvest collects no personal data. Ever.</strong> No
        accounts, no tracking, no analytics, no cookies, no data sent to
        any server. What's on your device stays on your device.
      </Section>

      <Section title="1. Data we collect">
        We collect <strong>nothing.</strong> MalawiHarvest runs entirely
        in your browser. No personal information, usage data, location,
        or device identifiers are collected or transmitted.
      </Section>

      <Section title="2. Local storage">
        If you submit a community price report, that report is saved to
        your browser's <code style={{ background: '#F0E9DE', padding: '1px 5px', borderRadius: '4px', fontSize: '13px' }}>localStorage</code> — a
        storage area on your own device. This data never leaves your device
        and is never sent to MalawiHarvest or any third party. You can
        delete it at any time by clearing your browser's site data, or by
        pressing the ✕ button next to any report in the app.
      </Section>

      <Section title="3. Third-party services">
        MalawiHarvest loads fonts from Google Fonts (fonts.googleapis.com).
        This is a standard web font service. Google's privacy policy applies
        to that request. No other third-party services are used. There is no
        advertising, no social login, no analytics SDK.
      </Section>

      <Section title="4. Cookies">
        We use no cookies of any kind — not for sessions, not for tracking,
        not for preferences. Your language preference is stored in React
        component state only and is not persisted between sessions.
      </Section>

      <Section title="5. Children">
        MalawiHarvest does not knowingly collect any information from children
        or any other user. We collect no information from anyone.
      </Section>

      <Section title="6. Changes to this policy">
        If we ever change this policy (for example, if a backend is added
        in a future version), we will update the "Last updated" date above
        and describe what changed. Material changes will be announced via
        the GitHub repository.
      </Section>

      <Section title="7. Contact">
        For privacy questions, open an issue at{' '}
        <a href="https://github.com/DAUD09/malawi-harvest"
          style={{ color: 'var(--color-terracotta)' }}
          target="_blank" rel="noopener noreferrer">
          github.com/DAUD09/malawi-harvest
        </a>.
      </Section>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: '28px' }}>
      <h2 style={{
        fontFamily: 'var(--font-heading)', fontSize: '17px',
        fontWeight: 700, marginBottom: '8px', color: 'var(--color-soil)',
      }}>
        {title}
      </h2>
      <p style={{ fontSize: '14px', color: 'var(--color-soil)', lineHeight: 1.75 }}>
        {children}
      </p>
    </div>
  )
}