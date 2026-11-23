export function add_int(a, b) {
  return a + b
}

export function sub_int(a, b) {
  return a - b
}

export function mult_int(a, b) {
  return a * b
}

export function div_int(a, b) {
  if (b === 0n) throw new Error('division by zero')
  return a / b
}

export function mod_int(a, b) {
  if (b === 0n) throw new Error('division by zero')
  return a % b
}

export function negate_int(a) {
  return -a
}

export function add_num(a, b) {
  return a + b
}

export function sub_num(a, b) {
  return a - b
}

export function mult_num(a, b) {
  return a * b
}

export function div_num(a, b) {
  const quotient = Math.floor(a / b)
  if (b === 0 || !Number.isFinite(quotient)) {
    throw new Error('division by zero')
  }
  return quotient
}

export function mod_num(a, b) {
  const remainder = a % b
  if (b === 0 || !Number.isFinite(remainder)) {
    throw new Error('division by zero')
  }
  return remainder
}

export function negate_num(a) {
  return -a
}
