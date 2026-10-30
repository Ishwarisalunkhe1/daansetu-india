import { useState } from 'react'
import Filters from '../components/opportunities/Filters'
import OpportunityCard from '../components/opportunities/OpportunityCard'
import { demoOpportunities } from '../data/demoData'

export default function ExploreCauses() {
  const [filters, setFilters] = useState({ city: '', category: '', contributionType: '', q: '' })

  const filtered = demoOpportunities.filter((opp) => {
    if (filters.city && opp.city !== filters.city) return false
    if (filters.category && opp.category !== filters.category) return false
    if (filters.contributionType && opp.contributionType !== filters.contributionType) return false
    if (filters.q) {
      const query = filters.q.toLowerCase()
      if (!opp.title.toLowerCase().includes(query) && !opp.description.toLowerCase().includes(query)) return false
    }
    return true
  })

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-forest">Explore Causes</p>
        <h1 className="text-3xl font-semibold text-charcoal sm:text-4xl">Find opportunities to help</h1>
        <p className="text-slate">Browse community needs across India. All listings below are labelled DEMO.</p>
      </div>
      <div className="mt-6">
        <Filters onChange={setFilters} />
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((opportunity) => (
          <OpportunityCard key={opportunity.id} opportunity={opportunity} />
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="mt-8 rounded-2xl border border-stone-200 bg-white p-8 text-center">
          <p className="text-lg font-semibold text-charcoal">No opportunities match your filters</p>
          <p className="mt-2 text-sm text-slate">Try adjusting filters or clearing them.</p>
        </div>
      )}
    </div>
  )
}
