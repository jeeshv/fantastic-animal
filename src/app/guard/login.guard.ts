import { CanActivate, Router } from "@angular/router";
import { PortalService } from "../services/portal.service";
import { CookieService } from "angular2-cookie";
import { Injectable } from "@angular/core";

/**
 * 路由守卫
 */
@Injectable()
export class LoginGuard implements CanActivate{
    
    constructor(
        private portalService:PortalService,
        private cookieService: CookieService,
        private router: Router){

    }
    canActivate():Promise<boolean>{
        return this.portalService.getUserInfo().toPromise().then(
            res => {
                if (res.success) {
                    return true;
                } else {
                    console.log("用户未登录。");
                    this.cookieService.removeAll();
                    this.router.navigate(["/login"]);
                    return false;
                }
            }
        );
    }
}