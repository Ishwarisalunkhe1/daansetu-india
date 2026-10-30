import { Link } from 'react-router-dom'
import { HeartHandshake } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-warm-ivory">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forest text-white">
              <HeartHandshake className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-semibold text-charcoal">DaanSetu India</p>
              <p className="text-xs text-slate">दानसेतु</p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm text-slate">
            Every Contribution Builds a Better Tomorrow. A little money. A little time. A little kindness. Discover causes around you and contribute in a way that works for you.
          </p>
          <p className="mt-4 text-xs text-slate">© {new Date().getFullYear()} DaanSetu India. Built for community impact.</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-charcoal">Explore</p>
          <ul className="mt-3 space-y-2 text-sm text-slate">
            <li><Link to="/causes" className="hover:text-forest">Explore Causes</Link></li>
            <li><Link to="/volunteer" className="hover:text-forest">Volunteer</Link></li>
            <li><Link to="/ngos" className="hover:text-forest">NGOs</Link></li>
            <li><Link to="/about" className="hover:text-forest">About Us</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-charcoal">Get Involved</p>
          <ul className="mt-3 space-y-2 text-sm text-slate">
            <li><Link to="/donate" className="hover:text-forest">Donate (Demo)</Link></li>
            <li><Link to="/volunteer" className="hover:text-forest">Volunteer Near Me</Link></li>
            <li><Link to="/contact" className="hover:text-forest">Contact</Link></li>
            <li><Link to="/login" className="hover:text-forest">Login / Sign Up</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
