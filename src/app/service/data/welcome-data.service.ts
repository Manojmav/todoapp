import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http'
import { API_URL } from 'src/app/app.constants';

export class HelloWorldBean {
  constructor(public message: string){

  }
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http : HttpClient) { }

  executeWelcomeBeanService(name:string){
/*     let authentication = this.createBasicAuthHeaderString();
    let headers = new HttpHeaders({
      Authorization : authentication
    }) */
    // return this.http.get<HelloWorldBean>(`${API_URL}/hello/welcome/${name}`,{headers});
    return this.http.get<HelloWorldBean>(`${API_URL}/hello/welcome/${name}`);
  }

/*  createBasicAuthHeaderString(){
    let username = "angularapp";
    let password = "dummy";
    let authString = "Basic " + window.btoa(username + ":" + password);
    return authString;
  } */
}
