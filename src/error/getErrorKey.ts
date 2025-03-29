import { MechanismType } from '@/types'
//TODO优化：关于对错误类型做一个判断
export function getErrorKey(event: ErrorEvent | Event) {
  const isJsError = event instanceof ErrorEvent
  if (!isJsError) return MechanismType.RS
  return event.message === 'Script error.' ? MechanismType.CS : MechanismType.JS
}
