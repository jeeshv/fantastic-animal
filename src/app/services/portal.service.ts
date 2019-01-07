import {Injectable }from '@angular/core'; 
import {map, catchError }from 'rxjs/operators'; 
import {HttpHeaders,HttpClient, HttpParams }from '@angular/common/http'; 
import { ApilService } from '../shared/service/http/api.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class PortalService {
    private _baseUrl = 'http://localhost:8080/'

    constructor(private http:HttpClient,private api:ApilService) {
    }

    userLogin(username,password):any {
        const observe = 'response';
        return this.http.get(`${this._baseUrl}/user/login.do?username=${username}&password=${password}`,{
            observe
        });
    }
    logout(): Observable<any>{
        return this.http.get<any>(this._baseUrl +"user/logout.do");
    }
    regist(params):any {
        let httpOptions =  {
            headers: new  HttpHeaders({ 
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            })
        };
        return this.api.post("user/register.do", params,httpOptions);
    }
    
    getUserInfo():any{
        return this.api.get("user/get_user_info.do");
    }

    updateInfo(params):any{
        let httpOptions =  {
            headers: new  HttpHeaders({ 
                'Content-Type': 'application/json;charset=UTF-8'
            })
        };
        return this.api.post("user/update_information.do", params, httpOptions);
    }
    resetPassword(params):any{
        let httpOptions =  {
            headers: new  HttpHeaders({ 
                'Content-Type': 'application/json;charset=UTF-8'
            })
        };
        return this.api.post("user/reset_password.do", params, httpOptions);
    }

}
