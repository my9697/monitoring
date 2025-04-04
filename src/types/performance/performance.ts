/**
 * @param FCP 灰屏时长
 * @param LCP 最大内容绘制时长
 * @param FID 首次输入延迟
 * @param CLS 累计布局偏移
 * @param NT navigation-timing
 * @param RF resource-flow
 */

export enum PerformanceMetricsName {
  FCP = 'FCP',
  LCP = 'LCP',
  INP = 'INP',
  CLS = 'CLS',
  NT = 'navigationTiming',
  RF = 'resource-flow',
  CD = 'cache-data'
}

export interface PerformanceOptions {
  FCP?: boolean
  LCP?: boolean
  FID?: boolean
  CLS?: boolean
  navigationTiming?: boolean
  resourceFlow?: boolean
  cacheData?: boolean
}

/**
 * @param DNS DNS查询耗时
 * @param SSL SSL安全连接耗时
 * @param TCP TCP连接耗时
 * @param TTFB 请求响应耗时
 * @param Trans 内容传输耗时
 * @param DOMParse DOM解析耗时
 * @param DomReady HTML加载完成时间也就是 DOM Ready 时间    单页面客户端渲染下，为生成模板dom树所花费时间；非单页面或单页面服务端渲染下，为生成实际dom树所花费时间'
 * @param Res 资源加载耗时
 * @param Load 页面完全加载时间                            Load=首次渲染时间+DOM解析耗时+同步JS执行+资源加载耗时。
 * @param Rediect 重定向耗时
 * @param RedirectCount 重定向次数
 */

export interface PerformanceNavigationTiming {
  DNS: { start: number; end: number; value: number }
  SSL: { start: number; end: number; value: number }
  TCP: { start: number; end: number; value: number }
  TTFB: { start: number; end: number; value: number }
  Trans: { start: number; end: number; value: number }
  DomParse: { start: number; end: number; value: number }
  DomReady: { start: number; end: number; value: number }
  Res: { start: number; end: number; value: number }
  Load: { start: number; end: number; value: number }
  Redirect: { start: number; end: number; value: number }
  RedirectCount: number
}

export interface ResourceFlowTiming {
  name: string
  initiatorType: string
  transferSize: number
  start: number
  end: number
  DNS: number
  TCP: number
  SSL: number
  TTFB: number
  Trans: number
  Redirect: number
}

export type PerformanceEntryHandler = (entry: any) => any
