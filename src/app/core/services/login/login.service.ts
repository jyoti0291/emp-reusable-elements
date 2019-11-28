import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  private userId = '';
  // private apiURL = 'http://emp.collabo.rakuten.co.jp:8086/emp/services/Login?rakutenUserId=';
  private apiURL = '/emp/emp/services/Login?rakutenUserId=';
  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    withCredentials: true,
    observe: 'response' as 'response'
  };
  doLogin(userId): any {
    return this.http.post( this.apiURL + userId, {}, this.httpOptions);
  }
}
