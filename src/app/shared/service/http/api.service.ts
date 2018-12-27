import { Injectable } from "@angular/core";
import { Http, Jsonp } from "@angular/http";
// 使用rxjs
import { Observable } from 'rxjs'
// import 'rxjs/RX'
import { map } from 'rxjs/operators';


@Injectable()
export class ApilService {
    private _baseUrl = 'http://localhost:8080/'
    // 注入依赖服务
    // 构造函数内部声明，私有化，实例化
    constructor(private http: Http) {}


    get baseUrl(): string {
        return this._baseUrl;
    }
    set baseUrl(newBaseUrl: string) {
        this._baseUrl = newBaseUrl;
    }

    get(path: string, conf: any = {}, baseUrl?: string):Observable < any > {
        path = (baseUrl || this.baseUrl) + path;
        return this.http.get(path,conf);
    }


    post(path: string, data: any, conf: any = {}, baseUrl?: string): any {
        path = (baseUrl || this.baseUrl) + path;
        return this.http.post(path, data, conf);
    }
}