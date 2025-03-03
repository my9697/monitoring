// 对每一个错误详情，生成一串编码
export const getErrorUid = (input: string) => {
  return window.btoa(decodeURIComponent(encodeURIComponent(input)))
}
