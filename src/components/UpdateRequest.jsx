import { useState } from 'react'

export default function UpdateRequest() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [business, setBusiness] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('')
    setLoading(true)
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/client-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, business_name: business, message })
      })
      if (!res.ok) throw new Error('Could not submit request')
      setStatus('Sent! We will reply shortly.')
      setEmail(''); setBusiness(''); setMessage('')
    } catch (e) {
      setStatus('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!open && (
        <button onClick={() => setOpen(true)} className="rounded-full bg-slate-900 text-white px-4 py-3 shadow-lg hover:bg-slate-800">
          Request Update
        </button>
      )}
      {open && (
        <div className="w-[340px] rounded-xl bg-white border border-slate-200 shadow-2xl p-4">
          <div className="flex items-center justify-between">
            <div className="font-semibold text-slate-900">Request an update</div>
            <button onClick={() => setOpen(false)} className="text-slate-500">Close</button>
          </div>
          <form className="mt-3 space-y-3" onSubmit={submit}>
            <input placeholder="Your email" type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full rounded-md border border-slate-300 px-3 py-2" />
            <input placeholder="Business name" required value={business} onChange={(e)=>setBusiness(e.target.value)} className="w-full rounded-md border border-slate-300 px-3 py-2" />
            <textarea placeholder="What do you want to update?" required rows={3} value={message} onChange={(e)=>setMessage(e.target.value)} className="w-full rounded-md border border-slate-300 px-3 py-2" />
            {status && <div className="text-sm text-slate-600">{status}</div>}
            <div className="flex gap-2">
              <button type="submit" disabled={loading} className="flex-1 rounded-md bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 disabled:opacity-60">{loading ? 'Sending...' : 'Send'}</button>
              <button type="button" onClick={()=>setOpen(false)} className="rounded-md border border-slate-300 px-4 py-2">Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
