export function getVerificationLabel(status) {
  if (status === 'approved') return { label: 'Verified', tone: 'verified' }
  if (status === 'pending') return { label: 'Verification pending', tone: 'pending' }
  return { label: 'Unverified', tone: 'unverified' }
}

export function formatDate(dateStr) {
  try {
    return new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
  } catch {
    return dateStr
  }
}
