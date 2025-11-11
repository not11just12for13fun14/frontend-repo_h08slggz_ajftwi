import { useEffect, useState } from 'react'

export default function Portfolio() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/portfolio`)
        const data = await res.json()
        setItems(data.items || [])
      } catch (e) {
        setItems([])
      }
    }
    load()
  }, [])

  return (
    <section id="portfolio" className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Examples</h2>
        <p className="mt-3 text-slate-600 max-w-2xl">Sample designs for shops, services and professionals.</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden border border-slate-200 bg-white">
              <img src={it.thumbnail_url} alt={it.title} className="h-48 w-full object-cover"/>
              <div className="p-4">
                <div className="text-sm text-slate-500">{it.category}</div>
                <div className="text-lg font-semibold text-slate-900">{it.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
