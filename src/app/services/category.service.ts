import {Injectable }from '@angular/core'; 
import {map, catchError }from 'rxjs/operators'; 
import {HttpHeaders,HttpClient, HttpParams }from '@angular/common/http'; 
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class CategoryService {
    private _baseUrl = 'http://localhost:8080/'

    constructor(private http:HttpClient) {
    }

    getCategoryList():any {
        return this.http.get(this._baseUrl + "manage/category/get_category_list.do");
    }

   

}
