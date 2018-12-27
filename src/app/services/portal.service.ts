import {Injectable }from '@angular/core'; 
import {Http}from "@angular/http"; 
// 使用rxjs
import {Observable }from 'rxjs'
// import 'rxjs/RX'
import {map }from 'rxjs/operators'; 
import {HttpHeaders }from '@angular/common/http'; 
import { ApilService } from '../shared/service/http/api.service';

@Injectable()
export class PortalService {
    private _baseUrl = 'http://localhost:8080/'

    constructor(private http:Http,private api:ApilService) {
    }

    userLogin(params):any {
        return this.api.get("user/login.do", {
            search:params, 
            header:new HttpHeaders( {
                'Content-Type':'application/json;charset=UTF-8', 
                'Access-Control-Allow-Headers':'content-Type,Authorization'
            })
          });
    }
    regist(params):any {
        return this.api.post("user/register.do", params,
            {
                header:new HttpHeaders( {
                    'Content-Type':'application/json;charset=UTF-8', 
                    'Access-Control-Allow-Headers':'content-Type,Authorization'
                })
            }
        );
    }

    managerLogin(params): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'my-auth-token'
            })
          };
        return this.api.post('manage/user/login.do',params,
            {
                header:new HttpHeaders( {
                    'Content-Type':'application/json;charset=UTF-8', 
                    'Access-Control-Allow-Headers':'content-Type,Authorization'
                })
            }
        );
    }
}
