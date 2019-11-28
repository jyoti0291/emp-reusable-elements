import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  public getVersion(url: string): Observable<any[]> {
    return this.http.get<any[]>(url).pipe(map((data: any) => {
      return data;
    }));
  }
}
