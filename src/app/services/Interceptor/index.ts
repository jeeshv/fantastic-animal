import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { TokenInterceptorService } from './TokenInterceptorService';
import { InterceptorResponse } from './InterceptorResponse';
// 仅仅使用这个类来导出 Interceptor,后期好管理,直接把输出的const添加到appmodule的providers里面就可以了.未来可能有多个拦截器.
export const HttpInterceptorService = [
  {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: InterceptorResponse, multi: true},
  //{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
];

