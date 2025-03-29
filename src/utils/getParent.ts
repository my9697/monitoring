export function getParent(e: Event, className: string): HTMLElement | boolean {
  let el = e.target as HTMLElement
  if (el.classList.contains(className)) {
    return el
  } else {
    let count = 2
    while (el && count) {
      if (el.classList && el.classList.contains(className)) {
        return el
      } else {
        el = el.parentNode as HTMLElement
      }
      count--
    }
  }
  return false
}
