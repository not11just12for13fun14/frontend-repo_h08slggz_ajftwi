export default function Features() {
  const items = [
    { title: 'Fast launch', desc: 'Go live in days, not months. We handle setup end‑to‑end.' },
    { title: 'Affordable', desc: 'One small monthly fee. No heavy upfront cost.' },
    { title: 'Done‑for‑you', desc: 'Design, content, domain, hosting and maintenance — covered.' },
    { title: 'Ongoing support', desc: 'Request updates anytime from your dashboard.' },
    { title: 'Secure & reliable', desc: 'SSL, backups and monitoring for peace of mind.' },
    { title: 'Grow with you', desc: 'Add e‑commerce, bookings or a blog when you need it.' },
  ]
  return (
    <section id="features" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Why choose a monthly website?</h2>
        <p className="mt-3 text-slate-600 max-w-2xl">Better than DIY tools and cheaper than big agencies — built for Nigerian businesses.</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-xl border border-slate-200 p-6 bg-slate-50/60">
              <h3 className="text-lg font-semibold text-slate-900">{it.title}</h3>
              <p className="mt-2 text-slate-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
