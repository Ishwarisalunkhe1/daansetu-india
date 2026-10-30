import { useParams, Link } from 'react-router-dom'
import { MapPin, Calendar, ArrowLeft } from 'lucide-react'
import { demoOpportunities } from '../data/demoData'
import { getVerificationLabel, formatDate } from '../utils/helpers'

export default function CauseDetails() {
  const { id } = useParams()
  const opportunity = demoOpportunities.find((opp) => opp.id === id)

  if (!opportunity) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12 text-center">
        <h1 className="text-2xl font-semibold text-charcoal">Opportunity not found</h1>
        <p className="mt-2 text-slate">This may be a demo listing or the link is invalid.</p>
        <Link to="/causes" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-forest">
          <ArrowLeft className="h-4 w-4" /> Back to Explore Causes
        </Link>
      </div>
    )
  }

  const verification = getVerificationLabel(opportunity.ngo.verificationStatus)

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <Link to="/causes" className="flex items-center gap-2 text-sm text-slate hover:text-forest">
        <ArrowLeft className="h-4 w-4" /> Back to Explore Causes
      </Link>
      <div className="mt-6 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate">DEMO LISTING • Not a real opportunity</p>
            <h1 className="mt-2 text-3xl font-semibold text-charcoal">{opportunity.title}</h1>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-slate">
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4" />{opportunity.city}</span>
              <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />{formatDate(opportunity.eventDate)}</span>
            </div>
          </div>
          <span className={`rounded-full px-3 py-1 text-xs font-medium ${verification.tone === 'verified' ? 'bg-emerald-50 text-emerald-700' : verification.tone === 'pending' ? 'bg-amber-50 text-amber-700' : 'bg-stone-100 text-slate'}`}>
            {verification.label}
          </span>
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <section>
              <h2 className="text-lg font-semibold text-charcoal">About this opportunity</h2>
              <p className="mt-2 text-slate">{opportunity.description}</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-charcoal">Requirements</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-slate">
                <li>Contribution type: {opportunity.contributionType.replace('-', ' ')}</li>
                <li>Required skills: {opportunity.requiredSkills.length ? opportunity.requiredSkills.join(', ') : 'None specified'}</li>
                <li>Location: {opportunity.address}</li>
              </ul>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-charcoal">NGO profile</h2>
              <div className="mt-2 rounded-2xl border border-stone-200 p-4">
                <p className="font-medium text-charcoal">{opportunity.ngo.name}</p>
                <p className="mt-1 text-sm text-slate">Verification status: {verification.label}. Badge only appears after admin approval. This is not a guarantee of 80G benefits.</p>
                <p className="mt-2 text-xs text-slate">DEMO NGO — registration details not confirmed in this prototype.</p>
              </div>
            </section>
          </div>
          <aside className="space-y-4">
            <div className="rounded-2xl border border-stone-200 p-6">
              <h3 className="text-lg font-semibold text-charcoal">Take action</h3>
              <p className="mt-2 text-sm text-slate">This is a demo listing. No real data will be saved.</p>
              <div className="mt-4 flex flex-col gap-2">
                {opportunity.contributionType === 'donate-money' ? (
                  <Link to="/donate" className="rounded-full bg-forest px-4 py-2 text-center text-sm font-medium text-white hover:bg-forest-dark">Donate (Demo)</Link>
                ) : (
                  <Link to="/volunteer" className="rounded-full bg-forest px-4 py-2 text-center text-sm font-medium text-white hover:bg-forest-dark">Register interest (Demo)</Link>
                )}
                <Link to="/contact" className="rounded-full border border-stone-300 px-4 py-2 text-center text-sm font-medium text-charcoal hover:bg-warm-ivory">Contact platform</Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
