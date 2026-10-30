import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'volunteer', city: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-md px-4 py-12 text-center">
        <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-semibold text-charcoal">Demo signup</h1>
          <p className="mt-2 text-slate">Account creation not connected. Role selection is UI only.</p>
          <Link to="/login" className="mt-4 inline-block text-sm text-forest">Go to login</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-md px-4 py-10">
      <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-2xl font-semibold text-charcoal">Sign up</h1>
        <p className="mt-1 text-sm text-slate">Demo only. Supabase Auth not configured.</p>
        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <label className="flex flex-col gap-2 text-sm text-charcoal">Full name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="rounded-full border border-stone-200 px-4 py-2" /></label>
          <label className="flex flex-col gap-2 text-sm text-charcoal">Email<input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="rounded-full border border-stone-200 px-4 py-2" /></label>
          <label className="flex flex-col gap-2 text-sm text-charcoal">Password<input required type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="rounded-full border border-stone-200 px-4 py-2" /></label>
          <label className="flex flex-col gap-2 text-sm text-charcoal">Role
            <select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} className="rounded-full border border-stone-200 px-4 py-2">
              <option value="volunteer">Volunteer</option>
              <option value="ngo">NGO representative</option>
              <option value="admin">Administrator</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm text-charcoal">City<input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="rounded-full border border-stone-200 px-4 py-2" /></label>
          <button type="submit" className="rounded-full bg-forest px-6 py-3 text-sm font-medium text-white hover:bg-forest-dark">Sign up (Demo)</button>
        </form>
        <p className="mt-4 text-center text-sm text-slate">Already have an account? <Link to="/login" className="text-forest">Login</Link></p>
      </div>
    </div>
  )
}
