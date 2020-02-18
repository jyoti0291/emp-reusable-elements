import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class SessionInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (localStorage.getItem('CSRF-TOKEN')) {
      request = request.clone({
        headers: new HttpHeaders({
          'X-CSRF-TOKEN': localStorage.getItem('CSRF-TOKEN')
        })
      });
    }

    return next.handle(request).pipe(
      tap((ev: HttpEvent<any>) => {
      }, error => {
        console.error('Error is', error);
    }));
  }
}
