export function fdiv_num(a, b) {
  const quotient = a / b
  if (b === 0 || !Number.isFinite(quotient)) {
    throw new Error('division by zero')
  }
  return quotient
}

export function floor_num(a) {
  return Math.floor(a)
}

export function ceil_num(a) {
  return Math.ceil(a)
}

export function round_num(a) {
  return Math.round(a)
}

export function trunc_num(a) {
  return Math.trunc(a)
}
