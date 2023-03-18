interface FruitCounts {
  [fruit: string]: number
}

export default function countFruits(fruits: string[]) {
  const counts: FruitCounts = {}
  for (const fruit of fruits) {
    const count = counts[fruit] || 0
    counts[fruit] = count + 1
  }
  return counts
}
