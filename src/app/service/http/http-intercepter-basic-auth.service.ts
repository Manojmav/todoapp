import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicAuthenticationService } from '../Basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(
    private basicAuthService: BasicAuthenticationService
  ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // let username = "angularapp";
    // let password = "dummy";
    // let basicAuthString = "Basic " + window.btoa(username + ":" + password);
    let basicAuthString = this.basicAuthService.getAuthenticatedToken();
    let username = this.basicAuthService.getAuthenticatedUser();

    if (basicAuthString && username) {
      const updatedRequest = request.clone({
        setHeaders: {
          Authorization: basicAuthString
        }
      });
      return next.handle(updatedRequest);
    }
    return next.handle(request)
  }
}
