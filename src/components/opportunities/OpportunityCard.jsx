import { Link } from 'react-router-dom'
import { MapPin, Calendar } from 'lucide-react'
import { getVerificationLabel, formatDate } from '../../utils/helpers'

export default function OpportunityCard({ opportunity }) {
  const verification = getVerificationLabel(opportunity.ngo.verificationStatus)

  return (
    <article className="flex flex-col rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate">DEMO LISTING</p>
            <h3 className="mt-1 text-lg font-semibold text-charcoal">{opportunity.title}</h3>
          </div>
          <span className={`rounded-full px-3 py-1 text-xs font-medium ${verification.tone === 'verified' ? 'bg-emerald-50 text-emerald-700' : verification.tone === 'pending' ? 'bg-amber-50 text-amber-700' : 'bg-stone-100 text-slate'}`}>
            {verification.label}
          </span>
        </div>
        <p className="text-sm text-slate">{opportunity.description}</p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate">
          <span className="flex items-center gap-2"><MapPin className="h-4 w-4" />{opportunity.city}</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />{formatDate(opportunity.eventDate)}</span>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate">
          <span className="rounded-full bg-warm-ivory px-3 py-1">NGO: {opportunity.ngo.name}</span>
          <span className="rounded-full bg-warm-ivory px-3 py-1">Type: {opportunity.contributionType.replace('-', ' ')}</span>
        </div>
      </div>
      <div className="border-t border-stone-100 px-6 py-4">
        <Link to={`/causes/${opportunity.id}`} className="text-sm font-medium text-forest hover:text-forest-dark">
          View details
        </Link>
      </div>
    </article>
  )
}
