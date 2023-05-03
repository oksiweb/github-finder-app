type DebounceFn<T extends unknown[]> = (...args: T) => void

export function debounce<T extends unknown[]>(fn: DebounceFn<T>, delay: number): DebounceFn<T> {
  let timer: ReturnType<typeof setTimeout>
  return function (...rest: T) {
    clearTimeout(timer)
    timer = setTimeout(() => fn.apply(null, rest), delay)
  }
}
