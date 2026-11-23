export function ap_array(xs, fs) {
  const result = []
  for (let idx = 0; idx < fs.length; idx += 1) {
    for (let idx2 = 0; idx2 < xs.length; idx2 += 1) {
      result.push(fs[idx](xs[idx2]))
    }
  }
  return result
}
