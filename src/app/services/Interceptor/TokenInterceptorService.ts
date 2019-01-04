import {Injectable }from '@angular/core'; 
import {Observable }from 'rxjs/internal/Observable'; 
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { CookieService } from 'angular2-cookie';
/**
 * @description 拦截器，拦截所有http请求
 *  目前实现功能：
 *    1.请求的header中增加token
 */
@Injectable()
export class TokenInterceptorService implements HttpInterceptor{
  constructor(private cookieService: CookieService,){}
  intercept(req:HttpRequest < any > ,next:HttpHandler):Observable < HttpEvent < any >>  {

    const token = this.cookieService.get("token");

    if (token) {
      const cloned = req.clone( {
          headers:req.headers.set( 'Authorization', token)
      }); 

      return next.handle(cloned); 
    }
    else {
      return next.handle(req); 
    }
}

}