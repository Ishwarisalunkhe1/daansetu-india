import { Link } from 'react-router-dom'

export default function AdminDashboard() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold text-charcoal">Administrator Dashboard (UI)</h1>
      <p className="mt-1 text-slate">Role-based placeholder. No real data loaded.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {['Review NGO submissions and documents', 'Approve, reject or request corrections', 'Manage opportunities', 'Moderate impact stories', 'Review reported content', 'Maintain audit history of verification decisions'].map((item) => (
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
