import { Injectable } from "@angular/core";
import { Usergateway } from "../../User/gateway/usergateway";
import { Observable } from "rxjs";
import { User } from "../../User/user";

@Injectable({
    providedIn: 'root'
})

export class UserUseCase {
// metodos con la logica de negocio de mi aplicacion
constructor(private _userGateway : Usergateway){}

    login(email: string, password: string): Observable<User>{
        return  this._userGateway.login(email, password);
    }

}

