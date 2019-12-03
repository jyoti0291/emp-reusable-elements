import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  private userId = '';
  private apiURL = 'emp/emp/services/Login?rakutenUserId=';
  public httpOptions = {
    withCredentials: true,
    observe: 'response' as 'response'
  };
  doLogin(userId): Observable<any> {
    return this.http.post( this.apiURL + userId, {}, this.httpOptions);
  }
}
