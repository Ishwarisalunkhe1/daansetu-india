import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-md px-4 py-12 text-center">
        <div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-semibold text-charcoal">Demo login</h1>
          <p className="mt-2 text-slate">Authentication is not connected. This is a UI placeholder for role-based routes (Volunteer, NGO representative, Administrator).</p>
          <div className="mt-6 flex flex-col gap-2">
            <Link to="/dashboard/volunteer" className="rounded-full bg-forest px-4 py-2 text-sm text-white">Volunteer dashboard (UI)</Link>
            <Link to="/dashboard/ngo" className="rounded-full border border-forest px-4 py-2 text-sm text-forest">NGO dashboard (UI)</Link>
            <Link to="/dashboard/admin" className="rounded-full border border-stone-300 px-4 py-2 text-sm text-charcoal">Admin dashboard (UI)</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-md px-4 py-10">
      <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-2xl font-semibold text-charcoal">Login</h1>
        <p className="mt-1 text-sm text-slate">Demo only. Supabase Auth not configured.</p>
        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <label className="flex flex-col gap-2 text-sm text-charcoal">Email<input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="rounded-full border border-stone-200 px-4 py-2" /></label>
          <label className="flex flex-col gap-2 text-sm text-charcoal">Password<input required type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="rounded-full border border-stone-200 px-4 py-2" /></label>
          <button type="submit" className="rounded-full bg-forest px-6 py-3 text-sm font-medium text-white hover:bg-forest-dark">Login (Demo)</button>
        </form>
        <p className="mt-4 text-center text-sm text-slate">Don't have an account? <Link to="/signup" className="text-forest">Sign up</Link></p>
      </div>
    </div>
  )
}
