import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12 text-center">
        <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-semibold text-charcoal">Message sent (Demo)</h1>
          <p className="mt-2 text-slate">Thank you for reaching out. This is a demo form — no data saved.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-forest">Contact</p>
        <h1 className="text-3xl font-semibold text-charcoal">Get in touch</h1>
        <p className="text-slate">Contact form and platform enquiry details. No physical office address or real company phone number are listed here.</p>
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <form onSubmit={handleSubmit} className="grid gap-4 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
          <label className="flex flex-col gap-2 text-sm text-charcoal">Name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="rounded-full border border-stone-200 px-4 py-2" /></label>
          <label className="flex flex-col gap-2 text-sm text-charcoal">Email<input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="rounded-full border border-stone-200 px-4 py-2" /></label>
          <label className="flex flex-col gap-2 text-sm text-charcoal">Subject<input required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="rounded-full border border-stone-200 px-4 py-2" /></label>
          <label className="flex flex-col gap-2 text-sm text-charcoal">Message<textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="rounded-2xl border border-stone-200 px-4 py-2" rows={5} /></label>
          <p className="text-xs text-slate">Demo form — no data saved.</p>
          <button type="submit" className="rounded-full bg-forest px-6 py-3 text-sm font-medium text-white hover:bg-forest-dark">Send message (Demo)</button>
        </form>
        <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-charcoal">Platform enquiries</h2>
          <p className="mt-2 text-sm text-slate">For general questions about DaanSetu India. No office address or phone number listed.</p>
          <div className="mt-4 space-y-2 text-sm text-slate">
            <p>Email: enquiries@daansetu-india.example (demo placeholder)</p>
            <p>Use the form for platform-related queries.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
