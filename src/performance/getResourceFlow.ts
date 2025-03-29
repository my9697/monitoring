import { type ResourceFlowTiming } from '@/types/performance'

export function getResourceFlow(): ResourceFlowTiming[] {
  const resouceDatas = performance.getEntriesByType('resource')
  return resouceDatas.map(resourceData => {
    const {
      name,
      transferSize,
      initiatorType,
      startTime,
      responseEnd,
      domainLookupEnd,
      domainLookupStart,
      connectStart,
      connectEnd,
      secureConnectionStart,
      responseStart,
      requestStart,
      redirectStart,
      redirectEnd,
    } = resourceData

    return {
      name,
      initiatorType,
      transferSize,
      start: startTime,
      end: responseEnd,
      DNS: domainLookupEnd - domainLookupStart,
      TCP: secureConnectionStart ? secureConnectionStart - connectStart : connectEnd - connectStart,
      SSL: secureConnectionStart ? connectEnd - secureConnectionStart : 0,
      TTFB: responseStart - requestStart,
      Trans: responseEnd - requestStart,
      Redirect: redirectEnd - redirectStart,
    }
  })
}
