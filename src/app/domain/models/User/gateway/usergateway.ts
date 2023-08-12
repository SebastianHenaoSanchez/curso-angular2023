import { Observable } from "rxjs";
import { User } from "../user";

export abstract class Usergateway {
    abstract login(email: string, password: string) : Observable<User> 
}