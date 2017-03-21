import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Individu } from './individu';

@Injectable()
export class IndividuService {
    private testUrl: string = 'https://gestion-groupe.firebaseio.com';
    private baseUrl: string = 'http://localhost:8080/individu';  // URL to web api
    private individu = new Individu();
    private individus: Individu[];

  constructor(private http: Http) { }

  getIndividus(): Observable<Individu[]> {
    return this.http.get(this.baseUrl)
      .map(res => res.json());
  }

  getIndividu(id: number): Observable<Individu> {
    return this.http.get(`${this.baseUrl}/?id=${id}`)
      .map(res => res.json());
  }

  updateIndividu(i: Individu): Observable<Response> {
    
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    return this.http.put(
        `${this.baseUrl}/update`,
        JSON.stringify(i), {headers: headers})
        .map(res=> res.json());
    }
  
}