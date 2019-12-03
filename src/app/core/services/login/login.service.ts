import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  private userId = '';
  private apiEndPoint = '/emp/emp/services/';
  public httpOptions = {
    withCredentials: true,
    observe: 'response' as 'response'
  };

  doLogin(userId): Observable<any> {
    const apiURL = this.apiEndPoint + 'Login?rakutenUserId=';
    return this.http.post<any>(apiURL + userId, {}, this.httpOptions);
  }

  getUser(): Observable<any> {
    const apiURL = this.apiEndPoint + 'Users/Self';
    return this.http.get<any>(apiURL);
  }
}
