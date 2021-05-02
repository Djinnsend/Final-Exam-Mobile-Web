import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Router, Routes } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.page.html',
  styleUrls: ['./user-login.page.scss'],
})
export class UserLoginPage implements OnInit {
  username: string = '';
  email: string = '';
  password: string = '';
  data: String;
  constructor(private service: UserServiceService, private iab:InAppBrowser,private route: Router) {}

  ngOnInit() {}

  async login() {
    await this.service.login(this.email, this.username, this.password);
    this.data = JSON.parse(this.service.tempData.data);
    if (this.data['success'] == true) {
      this.route.navigateByUrl(`user-events/${this.username}`);
    } else {
      this.route.navigateByUrl(`login-signup-process`);
    }
  }

  openBrowser(){
    this.iab.create('http://localhost/final-Djinnsend/','_system');
  }
}
