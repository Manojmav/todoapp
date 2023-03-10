import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { API_URL } from '../app.constants';

export const AUTHENTICATE_USER = 'authenticateUser'
export const TOKEN = 'token'
@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  executeAuthenticationService(username: string, password: string) {

    let authString = "Basic " + window.btoa(username + ":" + password);

    let headers = new HttpHeaders({
      Authorization: authString
    })
    return this.http.get<AuthenticationBean>(`${API_URL}/basicAuth`, { headers }).pipe(map(
      data => {
        sessionStorage.setItem(AUTHENTICATE_USER, username);
        sessionStorage.setItem(TOKEN, authString);
        return data;
      }
    ));
  }

  executeJWTAuthenticationService(username: string, password: string) {

    return this.http.post<any>(`${API_URL}/authenticate`,
    { username, password}).pipe(map(
      data => {
        sessionStorage.setItem(AUTHENTICATE_USER, username);
        sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
        return data;
      }
    ));
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATE_USER);
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN);
    }
    return null;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATE_USER);
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATE_USER)
    sessionStorage.removeItem(TOKEN)
  }
}

export class AuthenticationBean {

  constructor(public message: string) {
  }

}
