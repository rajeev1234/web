import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Testmodel} from './testmodel';
import {User} from './user';


@Injectable()
export class TestserviceService {
  testmodel: Testmodel;
  httpHeaders = new HttpHeaders({'content-type': 'application/json ; charset=utf-8'});
  id: number;
  title: string;
  description: String;
  owner: User;

  constructor(private http: HttpClient) { }
    private getAuthHeaders() {
    const token = localStorage.getItem('Token');
    const token1 = token.replace(/['"]+/g, '');
    const httpHeaders = new HttpHeaders(
      {
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': 'Token ' + token1
      });
    return {headers: httpHeaders};
  }
  testing_service(testmodel): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/test/', testmodel);
  }
  testing(userData): Observable<any> {
    return this.http.post(' https://qui5lvlv43.execute-api.us-east-1.amazonaws.com/dev/postdetail/post', userData, this.getAuthHeaders()  );
  }

}
