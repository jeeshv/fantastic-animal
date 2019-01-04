import {Injectable}from "@angular/core"; 
import {HttpEvent, HttpHandler, HttpInterceptor, HttpResponse, HttpErrorResponse}from "@angular/common/http"; 
import {HttpRequest}from "@angular/common/http"; 
import { Observable, observable, of } from "rxjs";
import { mergeMap, catchError } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable()
export class InterceptorResponse implements HttpInterceptor {

  constructor(private router: Router, ) {
  }
  statusMap = new Map([
      ['status.0',"服务不可用。服务器当前不可用(过载或故障)。"],
      ['status.400',"错误的请求。由于语法错误，该请求无法完成。"],
      ['status.401',"未经授权。服务器拒绝响应。"],
      ['status.403',"已禁止。服务器拒绝响应。"],
      ['status.404',"未找到。无法找到请求的位置。"],
      ['status.405',"方法不被允许。使用该位置不支持的请求方法进行了请求。"],
      ['status.406',"不可接受。服务器只生成客户端不接受的响应。。"],
      ['status.407',"需要代理身份验证。客户端必须先使用代理对自身进行身份验证。"],
      ['status.408',"请求超时。等待请求的服务器超时。"],
      ['status.409',"冲突。由于请求中的冲突，无法完成该请求。"],
      ['status.410',"过期。请求页不再可用。"],
      ["status.411","长度必需。未定义“内容长度”。"],
      ["status.412","前提条件不满足。请求中给定的前提条件由服务器评估为 false。"],
      ["status.413","请求实体太大。服务器不会接受请求，因为请求实体太大。"],
      ["status.414","请求 URI 太长。服务器不会接受该请求，因为 URL 太长。"],
      ["status.415","不支持的媒体类型。服务器不会接受该请求，因为媒体类型不受支持。"],
      ["status.416","HTTP 状态代码 {0}"],
      ["status.500","内部服务器错误。"],
      ["status.501","未实现。服务器不识别该请求方法，或者服务器没有能力完成请求。"],
      ["status.503","服务不可用。服务器当前不可用(过载或故障)。"],
    ]);

    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        // 设置请求头
        const temp = req.clone({
            headers: req.headers.set('X-Api-Key', 'commonheader')
        });
        return next.handle(temp).pipe( mergeMap((event: any) => {
            return this.handleData(event);//具体处理请求返回数据
        }),
        catchError((err: HttpErrorResponse) => this.handleData(err)))
    }

    private handleData(event: HttpResponse<any> | HttpErrorResponse): Observable<any> {
        const status = event.status;
        if(status && 200 != status) console.log(this.statusMap.get(`status.` + status));
        // 业务处理：一些通用操作
        switch (event.status) {
          case 0:
            this.router.navigate(["/home"]);
            break;
          case 401: // 未登录状态码
            this.router.navigate(["/login"]);
            break;
          case 404:
            this.router.navigate(["/home"]);
                break;
          case 500:
                break;
          default:
          return of(event);
      }
    }
}