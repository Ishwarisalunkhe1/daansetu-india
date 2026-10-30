import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, HeartHandshake, Clock, Package, Lightbulb } from 'lucide-react'
import { CONTRIBUTION_TYPES, HOW_IT_WORKS } from '../utils/constants'
import { demoOpportunities } from '../data/demoData'
import OpportunityCard from '../components/opportunities/OpportunityCard'

const iconMap = {
  HeartHandshake,
  Clock,
  Package,
  Lightbulb,
}

export default function Home() {
  const featured = demoOpportunities.slice(0, 3)

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-16">
          <div className="space-y-6">
            <p className="inline-flex items-center rounded-full bg-forest/10 px-4 py-1 text-sm font-medium text-forest">
              DaanSetu India • दानसेतु
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-charcoal sm:text-5xl">
              You don't need to be rich to make a difference.
            </h1>
            <p className="text-lg text-slate">
              Every Contribution Builds a Better Tomorrow. A little money. A little time. A little kindness. Discover causes around you and contribute in a way that works for you.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/causes" className="rounded-full bg-forest px-6 py-3 text-sm font-medium text-white transition hover:bg-forest-dark">
                Explore Causes
              </Link>
              <Link to="/volunteer" className="rounded-full border border-forest px-6 py-3 text-sm font-medium text-forest transition hover:bg-forest/5">
                Volunteer Near Me
              </Link>
              <Link to="/donate" className="rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-charcoal transition hover:bg-warm-ivory">
                Donate
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-terracotta/10 blur-3xl" />
            <div className="absolute -bottom-12 -left-8 h-48 w-48 rounded-full bg-marigold/10 blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Indian volunteers working together for community upliftment"
              className="relative rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-charcoal sm:text-3xl">Four ways to contribute</h2>
          <p className="text-slate">Not everyone can donate large amounts. Choose what works for you.</p>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CONTRIBUTION_TYPES.map((type) => {
            const Icon = iconMap[type.icon]
            return (
              <div key={type.id} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest/10 text-forest">
                  {Icon && <Icon className="h-5 w-5" />}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-charcoal">{type.title}</h3>
                <p className="mt-2 text-sm text-slate">{type.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-charcoal sm:text-3xl">Featured causes & opportunities</h2>
            <p className="text-slate">Real community needs. Demo listings are clearly labelled.</p>
          </div>
          <Link to="/causes" className="flex items-center gap-2 text-sm font-medium text-forest hover:text-forest-dark">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((opportunity) => (
            <OpportunityCard key={opportunity.id} opportunity={opportunity} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-charcoal sm:text-3xl">How DaanSetu works</h2>
          <p className="text-slate">Simple steps to start contributing.</p>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HOW_IT_WORKS.map((item) => (
            <div key={item.step} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forest text-white">{item.step}</div>
              <h3 className="mt-4 text-lg font-semibold text-charcoal">{item.title}</h3>
              <p className="mt-2 text-sm text-slate">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-stone-200 bg-gradient-to-br from-forest/5 via-white to-terracotta/5 p-8 text-center shadow-sm">
          <h2 className="text-2xl font-semibold text-charcoal sm:text-3xl">Ready to make a difference?</h2>
          <p className="mt-2 text-slate">Start with what you can give today.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/causes" className="rounded-full bg-forest px-6 py-3 text-sm font-medium text-white transition hover:bg-forest-dark">
              Explore Causes
            </Link>
            <Link to="/volunteer" className="rounded-full border border-forest px-6 py-3 text-sm font-medium text-forest transition hover:bg-forest/5">
              Become a Volunteer
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate">Community impact section: demo values only. No real impact numbers are claimed.</p>
        </div>
      </section>
    </div>
  )
}
