import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private hcAuthentication: HardcodedAuthenticationService) {

  }
  username = 'angularapp'
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
}
