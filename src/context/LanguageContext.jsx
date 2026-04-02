import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')
  const toggle = () => setLang(l => (l === 'en' ? 'ny' : 'en'))
  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Custom hook — any component can call useLang() to get { lang, toggle }
export function useLang() {
  return useContext(LanguageContext)
}