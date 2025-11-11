export default function HowItWorks() {
  const steps = [
    { id: 1, title: 'Tell us what you need', desc: 'Share your business goals, brand and the pages you want. We keep it simple.' },
    { id: 2, title: 'We build and launch fast', desc: 'Our team designs, writes content and sets up hosting, domain and tracking.' },
    { id: 3, title: 'Go live with support', desc: 'We handle updates and maintenance. You focus on running the business.' },
  ]
  return (
    <section id="how" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">How it works</h2>
        <p className="mt-3 text-slate-600 max-w-2xl">A simple process designed for speed and clarity.</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map(s => (
            <div key={s.id} className="rounded-xl border border-slate-200 p-6 bg-slate-50/60">
              <div className="text-blue-700 font-semibold">Step {s.id}</div>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
