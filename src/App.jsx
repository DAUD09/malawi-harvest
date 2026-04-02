import { HashRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import { PriceProvider } from './context/PriceContext'
import Navbar from './components/Navbar'
import BottomNav from './components/BottomNav'
import SidebarNav from './components/SidebarNav'
import Home from './pages/Home'
import Prices from './pages/Prices'
import Calculator from './pages/Calculator'
import Calendar from './pages/Calendar'
import Report from './pages/Report'
import TermsOfService from './pages/TermsOfService'
import PrivacyPolicy  from './pages/PrivacyPolicy'
import Footer from './components/Footer'
import { useIsDesktop } from './hooks/useIsDesktop'

function Layout() {
  const isDesktop = useIsDesktop()

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)' }}>
      <Navbar />

      <div style={{ display: 'flex', minHeight: 'calc(100vh - 57px)' }}>

        {/* Sidebar: only rendered on desktop — no hidden element cluttering mobile */}
        {isDesktop && <SidebarNav />}

        <main style={{
          flex: 1,
          minWidth: 0,
          paddingBottom: isDesktop ? '24px' : '72px',
        }}>
          <Routes>
            <Route path="/"           element={<Home />} />
            <Route path="/prices"     element={<Prices />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/calendar"   element={<Calendar />} />
            <Route path="/report"     element={<Report />} />
            <Route path="/terms"   element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </main>

      </div>

      {/* Bottom nav: only rendered on mobile */}
      {!isDesktop && <BottomNav />}
      <Footer />
    </div>
  )
 
}

export default function App() {
  return (
    <HashRouter>
      <LanguageProvider>
        <PriceProvider>
          <Layout />
        </PriceProvider>
      </LanguageProvider>
    </HashRouter>
  )
}