import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component'
import { HelloWorldBean, WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  welcomeMessageFromBC: string = ''
  name = ''

  getWelcomeMessage() {
    console.log(this.service.executeWelcomeBeanService(this.name));
    this.service.executeWelcomeBeanService(this.name).subscribe(
      response => this.handleResponse(response),
      error => this.handleErrors(error)
    );
 
  }
  handleErrors(error:any) {
    this.welcomeMessageFromBC = error.error.message;
  }
  handleResponse(response: HelloWorldBean) {
    //console.log(response.message);
    this.welcomeMessageFromBC = response.message;
  }
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService) {

  }
  ngOnInit() {
    console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name']
  }

}
