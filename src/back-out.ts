export function backOut(t: number) {
  const s = 1.70158
  return --t * t * ((s + 1) * t + s) + 1
}