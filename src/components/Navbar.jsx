import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar({ onOpenSubscribe }) {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'How It Works', href: '#how' },
    { label: 'Features', href: '#features' },
    { label: 'Examples', href: '#portfolio' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-semibold text-slate-900 text-lg">Nexusflow Media</a>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} className="text-slate-700 hover:text-slate-900">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="#pricing" className="text-slate-700 hover:text-slate-900">See Plans</a>
          <button onClick={onOpenSubscribe} className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700">
            Get Started
          </button>
        </div>
        <button className="md:hidden p-2" onClick={() => setOpen((o)=>!o)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} onClick={()=>setOpen(false)} className="block text-slate-700">
                {n.label}
              </a>
            ))}
            <a href="#pricing" className="block text-slate-700" onClick={()=>setOpen(false)}>See Plans</a>
            <button onClick={() => { setOpen(false); onOpenSubscribe(); }} className="w-full rounded-md bg-blue-600 px-4 py-2 text-white font-medium">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
