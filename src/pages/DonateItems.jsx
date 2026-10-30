import { useState } from 'react'

export default function DonateItems() {
  const [form, setForm] = useState({ name: '', email: '', city: '', item: '', details: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12 text-center">
        <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-semibold text-charcoal">Enquiry submitted (Demo)</h1>
          <p className="mt-2 text-slate">Availability and acceptance are confirmed by the NGO. This is a demo enquiry — no data saved.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-forest">Donate Items / Share Skills</p>
        <h1 className="text-3xl font-semibold text-charcoal">Item contribution enquiry</h1>
        <p className="text-slate">Share details of items you'd like to donate. Availability and acceptance are confirmed by the NGO.</p>
      </div>
      <form onSubmit={handleSubmit} className="mt-6 grid gap-4 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm text-charcoal">Name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="rounded-full border border-stone-200 px-4 py-2" /></label>
          <label className="flex flex-col gap-2 text-sm text-charcoal">Email<input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="rounded-full border border-stone-200 px-4 py-2" /></label>
        </div>
        <label className="flex flex-col gap-2 text-sm text-charcoal">City<input required value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="rounded-full border border-stone-200 px-4 py-2" /></label>
        <label className="flex flex-col gap-2 text-sm text-charcoal">Item(s) to donate<input required value={form.item} onChange={(e) => setForm({ ...form, item: e.target.value })} className="rounded-full border border-stone-200 px-4 py-2" placeholder="Clothes, Books, Groceries" /></label>
        <label className="flex flex-col gap-2 text-sm text-charcoal">Details<textarea value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} className="rounded-2xl border border-stone-200 px-4 py-2" rows={4} /></label>
        <p className="text-xs text-slate">Demo form — no data saved.</p>
        <button type="submit" className="rounded-full bg-forest px-6 py-3 text-sm font-medium text-white hover:bg-forest-dark">Send enquiry (Demo)</button>
      </form>
    </div>
  )
}
