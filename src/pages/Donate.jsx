import { useState } from 'react'
import { Link } from 'react-router-dom'
import { demoOpportunities, demoNgos } from '../data/demoData'

export default function Donate() {
  const [amount, setAmount] = useState('50')
  const [custom, setCustom] = useState('')
  const [selected, setSelected] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const options = ['10', '50', '100', '500']

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12 text-center">
        <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
          <p className="text-sm text-terracotta">Demo only. No payment is being collected.</p>
          <h1 className="mt-2 text-2xl font-semibold text-charcoal">Demo checkout complete</h1>
          <p className="mt-2 text-slate">This is a demonstration. No card details were requested, no receipt was generated, and no data was saved to a live database.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/causes" className="rounded-full bg-forest px-6 py-3 text-sm font-medium text-white">Explore more causes</Link>
            <Link to="/" className="rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-charcoal">Back home</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-forest">Donate (Demo)</p>
        <h1 className="text-3xl font-semibold text-charcoal">Support a cause</h1>
        <p className="text-slate">Demo only. No payment is being collected. Do not enter card numbers, UPI PINs, OTPs or bank credentials.</p>
      </div>
      <form onSubmit={handleSubmit} className="mt-6 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
        <div>
          <p className="text-sm font-medium text-charcoal">Select amount</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {options.map((opt) => (
              <button
                type="button"
                key={opt}
                onClick={() => { setAmount(opt); setCustom('') }}
                className={`rounded-full px-4 py-2 text-sm ${amount === opt && !custom ? 'bg-forest text-white' : 'border border-stone-300 text-charcoal'}`}
              >
                ₹{opt}
              </button>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="text-slate">₹</span>
            <input
              type="number"
              min="1"
              placeholder="Custom amount"
              value={custom}
              onChange={(e) => { setCustom(e.target.value); setAmount('') }}
              className="w-full rounded-full border border-stone-200 px-4 py-2 text-sm"
            />
          </div>
        </div>
        <div className="mt-6">
          <p className="text-sm font-medium text-charcoal">Select cause or NGO (Demo)</p>
          <select value={selected} onChange={(e) => setSelected(e.target.value)} className="mt-3 w-full rounded-full border border-stone-200 px-4 py-2 text-sm">
            <option value="">Choose a demo opportunity or NGO</option>
            {demoOpportunities.map((opp) => (
              <option key={opp.id} value={opp.id}>{opp.title} — {opp.ngo.name}</option>
            ))}
            {demoNgos.map((ngo) => (
              <option key={ngo.id} value={ngo.id}>{ngo.name} — {ngo.city}</option>
            ))}
          </select>
        </div>
        <div className="mt-6 rounded-2xl bg-warm-ivory p-4 text-sm text-slate">
          <p className="font-medium text-charcoal">Demo checkout</p>
          <p className="mt-1">Demo only. No payment is being collected. Transparent fee/payment info not shown as real figures are not configured.</p>
        </div>
        <button type="submit" className="mt-6 w-full rounded-full bg-forest px-6 py-3 text-sm font-medium text-white hover:bg-forest-dark">Proceed to demo checkout</button>
      </form>
    </div>
  )
}
