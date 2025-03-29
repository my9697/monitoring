export function afterLoad(callback: (...args: any[]) => any) {
  if (document.readyState === 'complete') {
    setTimeout(callback)
  } else {
    window.addEventListener('load', callback, { once: true, capture: true })
  }
}
