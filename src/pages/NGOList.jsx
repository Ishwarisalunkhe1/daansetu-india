import { useState } from 'react'
import { demoNgos } from '../data/demoData'
import { getVerificationLabel } from '../utils/helpers'

export default function NGOList() {
  const [query, setQuery] = useState('')

  const filtered = demoNgos.filter((ngo) => {
    if (!query) return true
    const q = query.toLowerCase()
    return ngo.name.toLowerCase().includes(q) || ngo.city.toLowerCase().includes(q)
  })

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-forest">NGO Directory</p>
        <h1 className="text-3xl font-semibold text-charcoal">Organisations working on the ground</h1>
        <p className="text-slate">Searchable listings. Verification badge only appears after admin approval. Demo listings are clearly labelled.</p>
      </div>
      <div className="mt-6">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by name or city" className="w-full max-w-md rounded-full border border-stone-200 px-4 py-2 text-sm" />
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((ngo) => {
          const verification = getVerificationLabel(ngo.verificationStatus)
          return (
            <article key={ngo.id} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate">DEMO NGO</p>
                  <h3 className="mt-1 text-lg font-semibold text-charcoal">{ngo.name}</h3>
                  <p className="text-sm text-slate">{ngo.city}</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${verification.tone === 'verified' ? 'bg-emerald-50 text-emerald-700' : verification.tone === 'pending' ? 'bg-amber-50 text-amber-700' : 'bg-stone-100 text-slate'}`}>
                  {verification.label}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate">{ngo.description}</p>
              <p className="mt-4 text-xs text-slate">Website, contact, registration details shown only if confirmed. Darpan ID alone does not grant verified badge.</p>
            </article>
          )
        })}
      </div>
    </div>
  )
}
