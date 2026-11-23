export function chain_array(xs, f) {
  const result = []
  for (let idx = 0; idx < xs.length; idx += 1) {
    for (let idx2 = 0, ys = f(xs[idx]); idx2 < ys.length; idx2 += 1) {
      result.push(ys[idx2])
    }
  }
  return result
}
