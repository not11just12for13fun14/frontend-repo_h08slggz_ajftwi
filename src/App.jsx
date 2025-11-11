import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Features from './components/Features'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import SubscribeModal from './components/SubscribeModal'
import UpdateRequest from './components/UpdateRequest'

function App() {
  const [open, setOpen] = useState(false)
  const [plan, setPlan] = useState('growth')

  const openSubscribe = (slug = 'growth') => {
    setPlan(slug)
    setOpen(true)
  }

  useEffect(() => {
    if (!import.meta.env.VITE_BACKEND_URL) {
      console.warn('VITE_BACKEND_URL is not set. Set it to your backend URL.')
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar onOpenSubscribe={() => openSubscribe()} />
      <main>
        <Hero onOpenSubscribe={() => openSubscribe()} />
        <HowItWorks />
        <Pricing onOpenSubscribe={(slug)=>openSubscribe(slug)} />
        <Features />
        <Portfolio />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <SubscribeModal open={open} onClose={()=>setOpen(false)} defaultPlan={plan} />
      <UpdateRequest />
    </div>
  )
}

export default App
