import { Link } from 'react-router-dom'

export default function VolunteerDashboard() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold text-charcoal">Volunteer Dashboard (UI)</h1>
      <p className="mt-1 text-slate">Role-based placeholder. No real data loaded.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {['Profile', 'Registered opportunities', 'Application statuses', 'Saved causes', 'Contribution history'].map((item) => (
          <div key={item} className="rounded-2xl border border-stone-200 bg-white p-4">
            <p className="font-medium text-charcoal">{item}</p>
            <p className="mt-1 text-sm text-slate">Demo section</p>
          </div>
        ))}
      </div>
      <Link to="/login" className="mt-6 inline-block text-sm text-forest">Back to login</Link>
    </div>
  )
}
