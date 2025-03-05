import { MechanismType } from '@/types'

export function getErrorKey(event: ErrorEvent | Event) {
  const isJsError = event instanceof ErrorEvent
  if (!isJsError) return MechanismType.RS
  return event.message === 'Script error.' ? MechanismType.CS : MechanismType.JS
}
