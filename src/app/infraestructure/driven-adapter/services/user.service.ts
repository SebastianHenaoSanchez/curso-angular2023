import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usergateway } from 'src/app/domain/models/User/gateway/usergateway';
import { User } from 'src/app/domain/models/User/user';
import { GenericService } from './helpers/generic.service';

@Injectable({
  providedIn: 'root'
})
export class UserService implements Usergateway {

  constructor(private genericService:GenericService) { }
  _url = 'https://dummyjson.com'

  login(email: String, password: string): Observable<User> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
      .set('mi-header', 'mi-header-value')

    return this.genericService.post<User>(this._url, 'auth/login', { username: 'kminchelle', password: '0lelplR' });

  }
}
