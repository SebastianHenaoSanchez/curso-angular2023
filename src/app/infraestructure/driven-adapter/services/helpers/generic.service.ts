import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, concat, concatMap, delay, of, retryWhen, take, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  constructor(private http: HttpClient) {
   }

  public get<T>(url: string, endpoint: string, params?: string, headers?: HttpHeaders): Observable<T> {

    return this.http.get<T>(`${url}/${endpoint}` + (params ?? ''), { headers }).pipe(  //el .pipe me permite obtener los datos del observable
      retryWhen(errors => errors.pipe(
        concatMap((result: any) => {
          if (result.code === 504) {
            return of(result);
          }
          return throwError(result)
        }),
        delay(1000), // 1 segundo entre cada intento
        take(4), //va a intentar 4 veces
        o => concat(o, throwError('No fue posible conectarse con el servidor'))

      )),
      catchError((err: HttpErrorResponse) => {
        return this.handleError(err);
      })
    )

  }

  public post<T>(url: string, endpoint: string, model?: any, headers?: HttpHeaders): Observable<any> {
    return this.http.post<T>(`${url}/${endpoint}`, model, { headers })
  }

  public put<T>(url: string, endpoint: string, model?: any, headers?: HttpHeaders): Observable<any> {
    return this.http.put<T>(`${url}/${endpoint}`, model, { headers })
  }
  public patch<T>(url: string, endpoint: string, model?: any, headers?: HttpHeaders): Observable<any> {
    return this.http.patch<T>(`${url}/${endpoint}`, model, { headers })
  }

  handleError(error: HttpErrorResponse) {
    if (error.error != null && error.error.message === 'No Auth') {
      localStorage.clear();
    }
    return throwError(error);

  }
}