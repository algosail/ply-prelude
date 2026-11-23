const zeroError = () => {
  throw new RangeError('Division by zero')
}

export function quotRem_int(a, b) {
  if (b === 0n) zeroError()
  return [a / b, a % b]
}

export function divMod_int(a, b) {
  if (b === 0n) zeroError()
  const q = a / b
  const r = a % b
  if (r !== 0n && r < 0n !== b < 0n) {
    return [q - 1n, r + b]
  }
  return [q, r]
}

export function quotRem_num(a, b) {
  const quotient = Math.trunc(a / b)
  if (b === 0 || !Number.isFinite(quotient)) zeroError()
  return [quotient, a % b]
}

export function divMod_num(a, b) {
  const quotient = Math.floor(a / b)
  if (b === 0 || !Number.isFinite(quotient)) zeroError()
  const remainder = a % b
  const modR = remainder !== 0 && remainder < 0 !== b < 0 ? remainder + b : remainder
  return [quotient === 0 ? 0 : quotient, modR === 0 ? 0 : modR]
}
