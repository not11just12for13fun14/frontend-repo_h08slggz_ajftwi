import Spline from '@splinetool/react-spline'

export default function Hero({ onOpenSubscribe }) {
  return (
    <section id="top" className="relative h-[80vh] min-h-[520px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white pointer-events-none" />
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <p className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-1 rounded">Nexusflow Media</p>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Get a Professional Website for a Monthly Fee — No Big Upfront Cost.
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            We help Nigerian businesses get online fast with beautiful, mobile‑friendly websites. Affordable monthly pricing. Hosting, domain and support included.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button onClick={onOpenSubscribe} className="rounded-md bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-700">Get Started</button>
            <a href="#pricing" className="rounded-md bg-white px-5 py-3 text-blue-700 font-medium border border-blue-200 hover:border-blue-300">See Plans</a>
          </div>
        </div>
      </div>
    </section>
  )
}
