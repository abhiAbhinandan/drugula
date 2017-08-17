import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { GlobalService } from './global.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class GetdataService {
  private baseUrl = '';
  private header: Headers;
  constructor(private http: Http, private globalConfig: GlobalService) {
    this.baseUrl = globalConfig.apiBaseAddress;
    this.header = new Headers({ 'content-type': 'application/json' });
  }
  getContainerItems(serviceName, containerId): Observable<Response> {
    const url = `${this.baseUrl}/getContainerItems/${serviceName}/${containerId}`;
    return this.http.get(url).
      map((res: Response) => res.json()).
      catch((error: any) => Observable.throw('server error'))
  }

}
