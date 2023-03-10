import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/Basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private router: Router,
    private hcAuthentication: HardcodedAuthenticationService,
    private basicAuthentication: BasicAuthenticationService
  ) {

  }
  username = ''
  password = ''
  errorMessage = 'Invalid credentials'
  invalidLogin: boolean = false

  handleLogin() {
    // if (this.username === 'angularapp' && this.password === 'dummy') {
    if (this.hcAuthentication.authenticate(this.username, this.password)) {
      this.invalidLogin = false
      this.router.navigate(['welcome', this.username])
    }
    else {
      this.invalidLogin = true
    }
  }

  handleBasicAuthLogin() {
    // if (this.username === 'angularapp' && this.password === 'dummy') {
    this.basicAuthentication.executeAuthenticationService(this.username, this.password).subscribe(
      response => {
        console.log(response)
        this.invalidLogin = false
        this.router.navigate(['welcome', this.username])
      },
      error => {
        console.log(error)
        this.invalidLogin = true
      })
  }

  handleJWTAuthLogin() {
    // if (this.username === 'angularapp' && this.password === 'dummy') {
    this.basicAuthentication.executeJWTAuthenticationService(this.username, this.password).subscribe(
      response => {
        console.log(response)
        this.invalidLogin = false
        this.router.navigate(['welcome', this.username])
      },
      error => {
        console.log(error)
        this.invalidLogin = true
      })
  }
}
