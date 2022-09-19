export const fromChallenge = (from, to) => {
  if (typeof from !== 'string') throw new Error('from must be a string')
  if (typeof to !== 'string') throw new Error('from must be a string')

  const hasSameLength = from.length === to.length
  const hasSameUniqueChars = new Set(from).size === new Set(to).size

  if (!hasSameLength) return false
  if (!hasSameUniqueChars) return false

  const transformations = {}

  for (let i = 0; i < from.length; i++) {
    const fromChar = from[i]
    const toChar = to[i]

    if (transformations[fromChar] && transformations[fromChar] !== toChar) {
      return false
    }
    transformations[fromChar] = toChar
  }

  return true
}
