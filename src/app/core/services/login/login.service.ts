import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  private userId = '';
  // private apiURL = 'http://emp.collabo.rakuten.co.jp:8086/emp/services/Login?rakutenUserId=';
  private apiURL = '/api/' + 'Login?rakutenUserId=';

  doLogin(userId): Observable<any[]> {
    return this.http.post<any[]>( this.apiURL + userId, {});
  }
}
