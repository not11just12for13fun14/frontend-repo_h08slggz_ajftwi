import { useEffect, useState } from 'react'

export default function Testimonials() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/testimonials`)
        const data = await res.json()
        setItems(data.items || [])
      } catch (e) {
        setItems([])
      }
    }
    load()
  }, [])

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What clients say</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((t, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-200 p-6 bg-slate-50/60">
              <p className="text-slate-800">“{t.quote}”</p>
              <div className="mt-4 text-sm text-slate-600">{t.name} · {t.role}, {t.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
