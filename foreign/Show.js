export function show_str(value) {
  return JSON.stringify(value)
}

export function show_num(a) {
  if (Number.isNaN(a)) return 'NaN'
  if (a === Infinity) return 'Infinity'
  if (a === -Infinity) return '-Infinity'
  return String(a)
}

export function show_int(a) {
  return a.toString() + 'n'
}

export function show_array(Show, xs) {
  const show = Show.show

  return '< ' + xs.map(show).join(' ') + ' >'
}
