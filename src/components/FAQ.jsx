import { useEffect, useState } from 'react'

export default function FAQ() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/faqs`)
        const data = await res.json()
        setItems(data.items || [])
      } catch (e) {
        setItems([])
      }
    }
    load()
  }, [])

  return (
    <section id="faq" className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white overflow-hidden">
          {items.map((f, idx) => (
            <div key={idx} className="p-6">
              <div className="font-semibold text-slate-900">{f.question}</div>
              <div className="mt-2 text-slate-700">{f.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
