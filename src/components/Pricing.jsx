export default function Pricing({ onOpenSubscribe }) {
  const plans = [
    {
      name: 'Basic', slug: 'basic', price: '₦15,000/mo', highlight: false,
      features: ['1–3 pages', 'Free .com.ng domain', 'Managed hosting', 'Mobile friendly', 'Monthly updates', 'Email & WhatsApp support']
    },
    {
      name: 'Growth', slug: 'growth', price: '₦35,000/mo', highlight: true,
      features: ['Up to 10 pages', 'Blog or portfolio', 'Basic SEO', 'Analytics & tracking', 'Priority support', 'Speed optimization']
    },
    {
      name: 'Premium', slug: 'premium', price: '₦65,000/mo', highlight: false,
      features: ['Unlimited pages', 'E‑commerce or bookings', 'Advanced SEO', 'Automations', 'Dedicated success manager', 'Uptime monitoring']
    }
  ]

  return (
    <section id="pricing" className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Simple monthly plans</h2>
            <p className="mt-3 text-slate-600 max-w-2xl">Transparent pricing with everything you need to launch and grow.</p>
          </div>
          <a href="#faq" className="text-blue-700 font-medium">Have questions? Read the FAQ →</a>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.slug} className={`rounded-2xl border p-6 ${p.highlight ? 'border-blue-300 bg-white shadow-lg' : 'border-slate-200 bg-white'}`}>
              {p.highlight && <div className="mb-3 inline-flex rounded-full bg-blue-50 text-blue-700 text-xs font-semibold px-2 py-1">Most Popular</div>}
              <h3 className="text-xl font-semibold text-slate-900">{p.name}</h3>
              <div className="mt-2 text-3xl font-extrabold text-slate-900">{p.price}</div>
              <ul className="mt-4 space-y-2">
                {p.features.map((f,i)=>(
                  <li key={i} className="text-slate-700 flex items-start gap-2"><span className="text-blue-600">•</span><span>{f}</span></li>
                ))}
              </ul>
              <button onClick={() => onOpenSubscribe(p.slug)} className={`mt-6 w-full rounded-md px-4 py-2 font-medium ${p.highlight ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
