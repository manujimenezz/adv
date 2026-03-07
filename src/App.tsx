import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Firm from './pages/Firm'
import Advisory from './pages/Advisory'
import Approach from './pages/Approach'
import Contact from './pages/Contact'

export default function App() {
  const location = useLocation()

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/firm" element={<Firm />} />
          <Route path="/advisory" element={<Advisory />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  )
}
