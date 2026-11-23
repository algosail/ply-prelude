export function lte_str(a, b) {
  return a <= b
}

export function lte_num(a, b) {
  return a <= b
}

export function lte_int(a, b) {
  return a <= b
}

export function lte_bool(a, b) {
  return a === false || b === true
}

export function lte_unit(a, b) {
  return true
}

export function lte_array(ord, xs, ys) {
  const lte = ord.lte
  const equal = ord.Setoid.equal

  for (let idx = 0; true; idx += 1) {
    if (idx === xs.length) break
    if (idx === ys.length) return false
    if (!equal(xs[idx], ys[idx])) {
      return lte(xs[idx], ys[idx])
    }
  }

  return true
}
