import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
 
@Injectable()
export class LoginService {
  private baseUrl: string = 'http://localhost:8080/login';
 
  constructor(private http: Http) {
  }
 
 sendCredential(username: string, password: string) {
    let url = "http://localhost:8080/index";
    let params = 'username='+username+'&password='+password;
    let headers = new Headers(
    {
      'Content-Type': 'application/x-www-form-urlencoded'
      // 'Access-Control-Allow-Credentials' : true
    });
    return this.http.post(url, params, {headers: headers, withCredentials : true});
  }

  check(name: string, password: string) {
     let body = 'username='+name+'&password='+password ;
     let headers = new Headers(
    {
      'Content-Type': 'application/x-www-form-urlencoded'
      // 'Access-Control-Allow-Credentials' : true
    });
     return this.http.post(this.baseUrl, body, {headers: headers, withCredentials : true});
    
  }
 
}