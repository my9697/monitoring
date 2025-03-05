import { type HttpMetrics } from '@/types';
import { formatDate } from '@/utils';

export function proxyFetch(loadHandler: (...args: any[]) => any) {
  if ('fetch' in window && typeof window.fetch === 'function') {
    const oFetch = window.fetch;
    if (!(window as any).oFetch) {
      (window as any).oFetch = oFetch;
    }
    (window as any).fetch = async (input: any, init: RequestInit) => {
       
      let httpMetrics: HttpMetrics = {} as HttpMetrics;

      httpMetrics.method = init?.method ?? '';
      httpMetrics.url = (input && typeof input !== 'string' ? input?.url : input) || ''; // 请求的url
      httpMetrics.body = init?.body ?? '';
      httpMetrics.requestTime = new Date().getTime();
      httpMetrics.responseTimeFormat = formatDate(new Date());

       
      return oFetch.call(window, input, init).then(async (response) => {
        // clone 出一个新的 response,再用其做.text(),避免 body stream already read 问题

        //暂时有疑问
        const res = response.clone();
        httpMetrics = {
          ...httpMetrics,
          status: res.status,
          statusText: res.statusText,
          response: res.text() ?? JSON.parse(await res.text()),
          responseTime: new Date().getTime(),
        };
        if (typeof loadHandler === 'function') loadHandler(httpMetrics);
        return response;
      });
    };
  }
}
