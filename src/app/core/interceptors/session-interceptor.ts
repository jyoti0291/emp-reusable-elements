import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class SessionInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    if (localStorage.getItem('CSRF-TOKEN') != null) {
      const token = localStorage.getItem('CSRF-TOKEN');

      const AuthRequest = req.clone({
        headers: new HttpHeaders({
          'X-CSRF-TOKEN': token,
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
          'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
          'Access-Control-Allow-Credentials': 'true'
        })
      });
      return next.handle(AuthRequest);
    } else {
      return next.handle(req);
    }
  }
}
