import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-forest">About Us</p>
        <h1 className="text-3xl font-semibold text-charcoal sm:text-4xl">About DaanSetu India</h1>
        <p className="text-slate">DaanSetu India (दानसेतु) — "Every Contribution Builds a Better Tomorrow."</p>
      </div>
      <div className="mt-6 space-y-6 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-10">
        <section>
          <h2 className="text-lg font-semibold text-charcoal">The problem</h2>
          <p className="mt-2 text-slate">People want to help but do not always know where or how. Not everyone can donate large amounts of money.</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-charcoal">Mission</h2>
          <p className="mt-2 text-slate">Make community participation accessible by connecting people who want to help with genuine community causes and NGOs in India.</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-charcoal">Vision</h2>
          <p className="mt-2 text-slate">Connect people and causes across India so that small acts of giving create lasting change.</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-charcoal">Four contribution methods</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-slate">
            <li>Donate Money</li>
            <li>Volunteer Time</li>
            <li>Donate Items</li>
            <li>Share Your Skills</li>
          </ul>
        </section>
        <div className="flex flex-wrap gap-3">
          <Link to="/causes" className="rounded-full bg-forest px-6 py-3 text-sm font-medium text-white">Explore Causes</Link>
          <Link to="/volunteer" className="rounded-full border border-forest px-6 py-3 text-sm font-medium text-forest">Volunteer</Link>
        </div>
      </div>
    </div>
  )
}
