import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from "rxjs";

@Injectable({
   providedIn: 'root'
})

export class Defaultauth implements CanActivate {
    constructor(private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        var token = localStorage.getItem('token');
        //llamemo un servicio que indique que el token es valido
        if (token) {
            return true;

        } else {
            this.router.navigate(['fullscreen/login'])
            return false
        }
    }
}
