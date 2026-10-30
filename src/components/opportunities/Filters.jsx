import { useState } from 'react'
import { Search, Filter } from 'lucide-react'
import { INDIAN_CITIES, CATEGORIES, CONTRIBUTION_TYPES } from '../../utils/constants'

export default function Filters({ onChange }) {
  const [filters, setFilters] = useState({ city: '', category: '', contributionType: '', q: '' })

  const update = (key, value) => {
    const next = { ...filters, [key]: value }
    setFilters(next)
    onChange?.(next)
  }

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate" />
          <input
            type="search"
            placeholder="Search opportunities..."
            className="w-full rounded-full border border-stone-200 px-10 py-2 text-sm focus:border-forest focus:outline-none"
            value={filters.q}
            onChange={(e) => update('q', e.target.value)}
          />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Filter className="h-4 w-4 text-slate" />
          <select className="rounded-full border border-stone-200 px-3 py-2 text-sm" value={filters.city} onChange={(e) => update('city', e.target.value)}>
            <option value="">City</option>
            {INDIAN_CITIES.map((city) => <option key={city} value={city}>{city}</option>)}
          </select>
          <select className="rounded-full border border-stone-200 px-3 py-2 text-sm" value={filters.category} onChange={(e) => update('category', e.target.value)}>
            <option value="">Cause</option>
            {CATEGORIES.map((cat) => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
          </select>
          <select className="rounded-full border border-stone-200 px-3 py-2 text-sm" value={filters.contributionType} onChange={(e) => update('contributionType', e.target.value)}>
            <option value="">Contribution type</option>
            {CONTRIBUTION_TYPES.map((type) => <option key={type.id} value={type.id}>{type.title}</option>)}
          </select>
        </div>
      </div>
    </div>
  )
}
