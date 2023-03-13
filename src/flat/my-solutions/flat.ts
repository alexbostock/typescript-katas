export default function flatten(...arrs: any[]) {
  return arrs.reduce((accumulator, arr) => accumulator.concat(arr), [])
}
