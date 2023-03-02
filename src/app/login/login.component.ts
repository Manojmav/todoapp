import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router){

  }
  username = 'angularapp'
  password = ''
  errorMessage = 'Invalid credentials'
  invalidLogin: boolean = false

  handleLogin() {
    if (this.username === 'angularapp' && this.password === 'dummy') {
      this.invalidLogin = false
      this.router.navigate(['welcome', this.username])
    }
    else {
      this.invalidLogin = true 
    }
    console.log("Login button clicked ", this.username);
  }
}
