import { Injectable } from '@angular/core';
import { Project } from './../model/project.model';


//API REST
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from '../model/person.model';
import { Portfolio } from '../model/portfolio.model';


//API REST
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };



@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  //Path
  apiURL : string = 'http://localhost:';
  apiURL1 : string = 'http://localhost:';
  apiURL2 : string = 'http://localhost:';

  projects !: Project[];

  project !: Project | undefined;

  constructor( /*API REST*/private http : HttpClient  ) { }


  //API REST
  listeProjects(): Observable<Project[]>{
    return this.http.get<Project[]>(this.apiURL);
   }

  //API REST
  ajouterProject( proj: Project ):Observable<Project>{
    return this.http.post<Project>(this.apiURL, proj, httpOptions);
   }

     //API REST
  supprimerProject(id : number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }


  //API REST
  consulterProject(id: number): Observable<Project> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Project>(url);
  }


  //API REST
  updateProject(proj :Project) : Observable<Project>
  {
  return this.http.put<Project>(this.apiURL, proj, httpOptions);
  }

  ///////////////////////////////////////////////////////
  /*id !: number;
  name !: string;
  description !: number;
  person !: Person;
  portfolio !: Portfolio;
  status !: string;
  */
  ///////////////////////////////////////////////////////


  //API REST Person
  listePerson(): Observable<Person[]>{
    return this.http.get<Person[]>(this.apiURL1);
  }

  //API REST Person
  ajouterPerson(per : Person): Observable<Person>{
    return this.http.post<Person>(this.apiURL1, per, httpOptions);
  }

  //API REST Person
  supprimerPerson(id : number) {
    const url = `${this.apiURL1}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  //API REST Person
  consulterPerson(id: number): Observable<Person> {
    const url = `${this.apiURL1}/${id}`;
    return this.http.get<Person>(url);
  }

  //API REST Person
  updatePerson(per :Person) : Observable<Person>
  {
  return this.http.put<Person>(this.apiURL1, per, httpOptions);
  }

  ///////////////////////////////////////////////////////
  /*id !: number;
  name !: string;
  description !: number;
  person !: Person;
  portfolio !: Portfolio;
  status !: string;
  */
  ///////////////////////////////////////////////////////


  //API REST Person
  listePortfolio(): Observable<Portfolio[]>{
    return this.http.get<Portfolio[]>(this.apiURL2);
  }

  //API REST Person
  ajouterPortfolio(port : Portfolio): Observable<Portfolio>{
    return this.http.post<Portfolio>(this.apiURL2, port, httpOptions);
  }

  //API REST Person
  supprimerPortfolio(id : number) {
    const url = `${this.apiURL2}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  //API REST Person
  consulterPortfolio(id: number): Observable<Portfolio> {
    const url = `${this.apiURL2}/${id}`;
    return this.http.get<Portfolio>(url);
  }

  //API REST Person
  updatePortfolio(port :Portfolio) : Observable<Portfolio>
  {
  return this.http.put<Portfolio>(this.apiURL2, port, httpOptions);
  }

}

