export function equal_str(a, b) {
  return a === b
}

export function equal_num(a, b) {
  return a === b
}

export function equal_int(a, b) {
  return a === b
}

export function equal_bool(a, b) {
  return a === b
}

export function equal_array(eq, xs, ys) {
  if (xs.length !== ys.length) return false
  const equal = eq.equal
  for (let i = 0; i < xs.length; i += 1) {
    if (!equal(xs[i], ys[i])) return false
  }
  return true
}
