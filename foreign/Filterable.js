export function filter_array(xs, f) {
  return xs.filter((x) => f(x))
}

export function partition_array(xs, pred) {
  const matches = []
  const rest = []
  for (let i = 0; i < xs.length; i += 1) {
    if (pred(xs[i])) matches.push(xs[i])
    else rest.push(xs[i])
  }
  return [matches, rest]
}
