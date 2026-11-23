export const Cell_Symbol = Symbol('Cell')

export function is_str(value) {
  return typeof value === 'string'
}

export function is_num(value) {
  return typeof value === 'number'
}

export function is_int(value) {
  return typeof value === 'bigint'
}

export function is_bool(value) {
  return typeof value === 'boolean'
}

export function is_unit(value) {
  return value === undefined
}

export function is_array(value) {
  return Array.isArray(value)
}

export function is_array_1(xs, pred) {
  for (let i = 0; i < xs.length; i += 1) {
    if (!pred(xs[i])) return false
  }
  return true
}

export function is_strMap(value) {
  typeof value === 'object'
}

export function is_strMap_1(xs, pred) {
  for (const v of Object.values(xs)) {
    if (!pred(v)) return false
  }

  return true
}

export function is_cell(value) {
  return value?.$$type === Cell_Symbol
}

export function is_cell_1(value, pred) {
  return pred(value.$$type)
}
