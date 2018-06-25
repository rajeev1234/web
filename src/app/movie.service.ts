import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Movie } from './movie';

@Injectable()
export class MovieService {

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

  constructor(private http: HttpClient) {
  }

  getMovies(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/movie/', this.getAuthHeaders());
  }
  postMovies(userData): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/movie/', userData, this.getAuthHeaders());
  }

  private getAuthHeaders() {
    const token = localStorage.getItem('token');
    const httpHeaders = new HttpHeaders(
      {
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': 'Token ' + token
      });
    return {headers: httpHeaders};
  }
}
