import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  private userId = '';
  private apiURL = 'http://emp.collabo.rakuten.co.jp:9090/emp/services/Login?rakutenUserId=';

  doLogin(userId): Observable<any[]> {
    this.apiURL += userId;
    return this.http.post<any[]>(this.apiURL, {});
  }
}
