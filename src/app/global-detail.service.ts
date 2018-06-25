import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GlobalDetailService {

  constructor(private http: HttpClient) { }
     testing_service(testmodel): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/test/', testmodel);
  }

}
