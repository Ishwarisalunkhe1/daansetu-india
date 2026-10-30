import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Volunteer() {
  const [form, setForm] = useState({ name: '', email: '', city: '', interests: '', days: '', skills: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12 text-center">
        <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-semibold text-charcoal">Interest submitted (Demo)</h1>
          <p className="mt-2 text-slate">Thank you for showing interest. This is a demo submission — no data has been saved to a live database.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/causes" className="rounded-full bg-forest px-6 py-3 text-sm font-medium text-white">Browse opportunities</Link>
            <Link to="/" className="rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-charcoal">Back home</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-forest">Volunteer</p>
        <h1 className="text-3xl font-semibold text-charcoal">Volunteer your time</h1>
        <p className="text-slate">People can contribute even without donating money. Opportunities for teaching, event assistance, cleanups, food distribution, photography, web design and more.</p>
      </div>
      <form onSubmit={handleSubmit} className="mt-6 grid gap-4 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm text-charcoal">
            Full name
            <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="rounded-full border border-stone-200 px-4 py-2" />
          </label>
          <label className="flex flex-col gap-2 text-sm text-charcoal">
            Email
            <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="rounded-full border border-stone-200 px-4 py-2" />
          </label>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm text-charcoal">
            City
            <input required value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="rounded-full border border-stone-200 px-4 py-2" />
          </label>
          <label className="flex flex-col gap-2 text-sm text-charcoal">
            Available days
            <input value={form.days} onChange={(e) => setForm({ ...form, days: e.target.value })} className="rounded-full border border-stone-200 px-4 py-2" placeholder="Weekends, Weekdays" />
          </label>
        </div>
        <label className="flex flex-col gap-2 text-sm text-charcoal">
          Interests
          <input value={form.interests} onChange={(e) => setForm({ ...form, interests: e.target.value })} className="rounded-full border border-stone-200 px-4 py-2" placeholder="Teaching, Cleanups, Food distribution" />
        </label>
        <label className="flex flex-col gap-2 text-sm text-charcoal">
          Skills
          <textarea value={form.skills} onChange={(e) => setForm({ ...form, skills: e.target.value })} className="rounded-2xl border border-stone-200 px-4 py-2" rows={4} placeholder="Photography, Web design, Mentoring..." />
        </label>
        <p className="text-xs text-slate">Demo form — validation only. No data saved.</p>
        <button type="submit" className="rounded-full bg-forest px-6 py-3 text-sm font-medium text-white hover:bg-forest-dark">Submit interest (Demo)</button>
      </form>
    </div>
  )
}
