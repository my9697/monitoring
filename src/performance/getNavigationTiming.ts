import { type PerformanceNavigationTiming } from '@/types/performance'

export function getNavigationTiming(): PerformanceNavigationTiming {
  const {
    domainLookupStart,
    domainLookupEnd,
    connectStart,
    connectEnd,
    secureConnectionStart,
    requestStart,
    responseStart,
    responseEnd,
    domInteractive,
    loadEventStart,
    domComplete,
    fetchStart,
    redirectCount,
    redirectStart,
    redirectEnd
  } = performance.getEntriesByType('navigation')[0]

  return {
    DNS: {
      start: domainLookupStart,
      end: domainLookupEnd,
      value: domainLookupEnd - domainLookupStart
    },
    TCP: {
      start: connectStart,
      end: connectEnd,
      value: secureConnectionStart ? secureConnectionStart - connectStart : connectEnd - connectStart
    },
    SSL: {
      start: secureConnectionStart ?? 0,
      end: secureConnectionStart ? connectEnd : 0,
      value: secureConnectionStart ? connectEnd - secureConnectionStart : 0
    },
    TTFB: {
      start: requestStart,
      end: responseStart,
      value: responseStart - requestStart
    },
    Trans: {
      start: responseStart,
      end: responseEnd,
      value: responseEnd - responseStart
    },
    DomParse: {
      start: responseEnd,
      end: domInteractive,
      value: domInteractive - responseEnd
    },
    DomReady: {
      start: fetchStart,
      end: domComplete,
      value: domComplete - fetchStart
    },
    Res: {
      start: responseEnd,
      end: loadEventStart,
      value: loadEventStart - responseEnd
    },
    Load: {
      start: fetchStart,
      end: loadEventStart,
      value: loadEventStart - fetchStart
    },
    Redirect: {
      start: redirectStart,
      end: redirectEnd,
      value: redirectEnd - redirectStart
    },
    RedirectCount: redirectCount
  }
}
