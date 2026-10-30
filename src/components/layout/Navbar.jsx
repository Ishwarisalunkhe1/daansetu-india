import { Link } from 'react-router-dom'
import { Menu, X, HeartHandshake } from 'lucide-react'
import { useState } from 'react'
import { NAV_LINKS } from '../../utils/constants'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur border-b border-stone-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forest text-white">
            <HeartHandshake className="h-5 w-5" />
          </div>
          <div>
            <p className="text-lg font-semibold text-charcoal">DaanSetu India</p>
            <p className="text-xs text-slate">दानसेतु</p>
          </div>
        </Link>

        <button
          className="md:hidden rounded-lg p-2 text-charcoal hover:bg-warm-ivory"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <ul className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <Link to={link.path} className="text-sm font-medium text-charcoal hover:text-forest">
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/login" className="rounded-full bg-forest px-4 py-2 text-sm font-medium text-white transition hover:bg-forest-dark">
              Login
            </Link>
          </li>
        </ul>
      </nav>

      {open && (
        <div className="border-t border-stone-200 bg-ivory md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-2 sm:px-6">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="block rounded-lg px-2 py-2 text-sm font-medium text-charcoal hover:bg-warm-ivory" onClick={() => setOpen(false)}>
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/login" className="mt-1 block rounded-full bg-forest px-4 py-2 text-center text-sm font-medium text-white" onClick={() => setOpen(false)}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
