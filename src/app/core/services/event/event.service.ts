import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { global } from 'app/shared/constants';

import { Observable, of, Subject } from 'rxjs/index';
import { map, mergeMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { console.log(global); }

  private apiEndPoint = '/emp' + global.CONSTANTS.globalUrl;

}
