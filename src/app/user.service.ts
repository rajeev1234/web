  import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {
  httpHeaders = new HttpHeaders({'content-type': 'application/json ; charset=utf-8'});

  constructor(private http: HttpClient) { }
  lol(userData): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/test/', userData);
  }
  registerUser(userData): Observable<any> {
    return this.http.post('https://e7ssu51k43.execute-api.us-east-1.amazonaws.com/dev/justlogin/login', userData);
  }
  postFile(fileToUpload: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload);
    return this.http.post('http://127.0.0.1:8000/userdetail/', formData);
}
  postdetail(userData): Observable<any> {
    // const formData: FormData = new FormData();
    // formData.append('file', fileToUpload);
    return this.http.post('http://127.0.0.1:8000/userdetails/', userData, this.getAuthHeaders());
}
  loginUser(userData: any): Observable<any> {
    // return this.http.post('http://127.0.0.1:8000/authenticate/', userData, {headers: this.httpHeaders});
    return this.http.post('https://mygyp37ofc.execute-api.us-east-1.amazonaws.com/dev/Demologin/login', userData);
    // return this.http.post('https://xg3stcypqi.execute-api.us-east-1.amazonaws.com/dev/SrcLoginCognito/login', userData);

  }
  confirmUser(key: any): Observable<any> {
    return this.http.post(' https://xqyr6wbq1e.execute-api.us-east-1.amazonaws.com/dev/DemoAuthVerifyUser/verify', JSON.stringify(key.value));
  }
  // confirmUser(userData): Observable<any> {
  //   return this.http.post('http://127.0.0.1:8000/rest-auth/registration/verify-email/', userData);
  // }
  password_set(userData): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/rest-auth/password/reset/', userData);
  }
  password_reset_confirm(userData): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/rest-auth/password/reset/confirm/', userData);
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
