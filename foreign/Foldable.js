export function fold_array(xs, init, f) {
  let acc = init
  for (const x of xs) acc = f(acc, x)
  return acc
}

export function size_array(xs) {
  return xs.length
}

export function all_array(xs, pred) {
  return xs.every(pred)
}

export function any_array(xs, pred) {
  return xs.some(pred)
}

export function reverse_array(xs) {
  return xs.slice().reverse()
}

export function sort_array(xs, pred) {
  return xs.concat([]).sort(pred)
}

export function length_str(str) {
  return str.length
}
