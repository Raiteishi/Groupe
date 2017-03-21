import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { Groupe }     from './groupe';


@Injectable()
export class GroupeService {
  private baseUrl: string = 'http://localhost:8080/groupe';  // URL to web api
  private testUrl: string = 'https://gestion-groupe.firebaseio.com';
  private groupesUrl: string = '/all';
  private endUrl: string = '.json';
  private groupe = new Groupe();
  private groupes: Groupe[];
  private check = false;
  
  constructor(private http: Http) { }

  getGroupes():Observable<Groupe[]> {
    console.log(this.baseUrl+this.groupesUrl);
    return this.http.get(this.baseUrl+this.groupesUrl)
      .map(res => res.json());
  } 


  getGroupe(id: number): Observable<Groupe> {
    /*let groupe$ = this.http
        .get(`${this.baseUrl}/?id=${id}`,{headers:this.getHeaders()})
        .map(mapGroupe);
    return groupe$;*/
    //console.log(this.testUrl+this.groupeUrl+"/"+id);
    return this.http.get(`${this.baseUrl}?id=${id}`)
      .map(res => res.json());
  }

  updateGroupe(groupe: Groupe): Observable<Response> {
    return this.http.put(
        `${this.baseUrl}/update?id=${groupe.id}&name=${groupe.name}`,
        JSON.stringify(groupe));
  }

  addGroupe (name: string) {
    let headers = new Headers();
    headers.append('Content-type','application/json');
    
    return this.http
        .put(`${this.baseUrl}?name=${name}`,
          JSON.stringify(name),headers);
  }

  deleteGroupe (groupe: Groupe) {
    console.log(this.baseUrl+'?id='+groupe.id);
    return this.http
        .delete(
          `${this.baseUrl}?id=${groupe.id}`
        );
  }

}