import { Injectable } from "@angular/core";
import { Http, Jsonp } from "@angular/http";
// 使用rxjs
import { Observable } from 'rxjs'
// import 'rxjs/RX'
import { map } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from "@angular/common/http";


@Injectable()
export class ApilService {
    private _baseUrl = 'http://localhost:8080/'
    // 注入依赖服务
    // 构造函数内部声明，私有化，实例化
    constructor(private http:HttpClient) {}


    get baseUrl(): string {
        return this._baseUrl;
    }
    set baseUrl(newBaseUrl: string) {
        this._baseUrl = newBaseUrl;
    }

    get(path: string, options: any = {}, baseUrl?: string):Observable < any > {
        path = (baseUrl || this.baseUrl) + path;
        return this.http.get(path);
    }

    post(path: string, data?: any, options: any = {}, baseUrl?: string):Observable < any > {
        path = (baseUrl || this.baseUrl) + path;
        return this.http.post(path, data, options);
    }
}