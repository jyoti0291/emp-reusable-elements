import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  private userId = '';
  private apiEndPoint = '/emp/emp/services/';
  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
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
