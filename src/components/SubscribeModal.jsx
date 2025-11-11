import { useState } from 'react'

export default function SubscribeModal({ open, onClose, defaultPlan }) {
  const [email, setEmail] = useState('')
  const [business, setBusiness] = useState('')
  const [plan, setPlan] = useState(defaultPlan || 'growth')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, business_name: business, plan_slug: plan })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to start subscription')
      if (data.authorization_url) {
        window.location.href = data.authorization_url
      }
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/50 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-slate-900">Get Started</h3>
          <button className="text-slate-500" onClick={onClose}>Close</button>
        </div>
        <p className="mt-1 text-slate-600 text-sm">Start your subscription in minutes. We’ll guide you through payment and onboarding.</p>
        <form className="mt-4 space-y-4" onSubmit={submit}>
          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Business name</label>
            <input required value={business} onChange={(e)=>setBusiness(e.target.value)} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Plan</label>
            <select value={plan} onChange={(e)=>setPlan(e.target.value)} className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2">
              <option value="basic">Basic – ₦15,000/mo</option>
              <option value="growth">Growth – ₦35,000/mo</option>
              <option value="premium">Premium – ₦65,000/mo</option>
            </select>
          </div>
          {error && <div className="text-sm text-red-600">{error}</div>}
          <button type="submit" disabled={loading} className="w-full rounded-md bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 disabled:opacity-60">
            {loading ? 'Processing...' : 'Continue to Payment'}
          </button>
        </form>
      </div>
    </div>
  )
}
