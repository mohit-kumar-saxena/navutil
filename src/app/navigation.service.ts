import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Navigation } from './navigation';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class NavigationService {

  getNavigation(myapp: string, myrole: string): Observable<Navigation[]> {

    console.log(myapp);
    return this.http.get<Navigation[]>('http://localhost:8080/navigation?app=' + myapp + "&role=" + myrole);
  }

  constructor(private http: HttpClient) { }

}
