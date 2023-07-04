import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from "rxjs";

@Injectable({
   providedIn: 'root'
})

export class Defaultauth implements CanActivate {
    constructor(private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        console.log("first")
        var token = localStorage.getItem('token');
        if (token === 'a@a.comSebas1234*') {
            return true;

        } else {
            this.router.navigate(['fullscreen/login'])
            return false
        }
    }
}
