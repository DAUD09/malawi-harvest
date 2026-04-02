import { useIsDesktop } from '../hooks/useIsDesktop'

export default function TermsOfService() {
  const isDesktop = useIsDesktop()

  return (
    <div style={{ padding: isDesktop ? '40px 48px' : '24px 16px', maxWidth: '760px' }}>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: isDesktop ? '32px' : '24px', marginBottom: '6px' }}>
        Terms of Service
      </h1>
      <p style={{ fontSize: '13px', color: 'var(--color-muted)', marginBottom: '32px' }}>
        Last updated: April 2026
      </p>

      <Section title="1. About MalawiHarvest">
        MalawiHarvest is a free, open-source web application that provides crop
        market price information for smallholder farmers in Malawi. It is operated
        as a civic technology project with no commercial motive.
      </Section>

      <Section title="2. Information accuracy">
        Prices displayed on MalawiHarvest are reference prices derived from
        historical ADMARC and ACE Africa data, supplemented by community reports
        submitted by users. They are <strong>not guaranteed to be accurate,
        current, or complete.</strong> Actual market prices at any specific
        location may differ. Always verify prices at your local market before
        making selling decisions. MalawiHarvest accepts no liability for
        financial decisions made based on information shown in this app.
      </Section>

      <Section title="3. Community price reports">
        When you submit a price report, you confirm that the information is
        accurate to the best of your knowledge. Reports are stored locally on
        your device only — they are not sent to any server. MalawiHarvest
        does not verify community-submitted prices.
      </Section>

      <Section title="4. No account required">
        MalawiHarvest does not require you to create an account or provide any
        personal information to use the app. No login, no registration.
      </Section>

      <Section title="5. Intellectual property">
        The MalawiHarvest source code is open source. Crop data derived from
        ADMARC and ACE Africa is used under fair use for public benefit.
        Price data contributed by community users remains in the public domain.
      </Section>

      <Section title="6. Disclaimer of warranties">
        This service is provided "as is" without warranties of any kind.
        MalawiHarvest is not responsible for any loss or damage arising from
        use of this application.
      </Section>

      <Section title="7. Changes to these terms">
        These terms may be updated from time to time. Continued use of the
        app after changes constitutes acceptance of the revised terms.
      </Section>

      <Section title="8. Contact">
        For questions about these terms, contact us via the project's
        GitHub repository at{' '}
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