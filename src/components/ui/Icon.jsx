import { HeartHandshake, Clock, Package, Lightbulb, MapPin, Calendar, ArrowRight } from 'lucide-react'

export const iconMap = {
  HeartHandshake,
  Clock,
  Package,
  Lightbulb,
  MapPin,
  Calendar,
  ArrowRight,
}

export function Icon({ name, className = 'w-5 h-5' }) {
  const LucideIcon = iconMap[name]
  if (!LucideIcon) return null
  return <LucideIcon className={className} />
}
