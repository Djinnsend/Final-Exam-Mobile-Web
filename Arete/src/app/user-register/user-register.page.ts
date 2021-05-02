import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Router, Routes } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.page.html',
  styleUrls: ['./user-register.page.scss'],
})
export class UserRegisterPage implements OnInit {
  username: string = '';
  fname: string = '';
  lname: string = '';
  dob: string = '';
  email: string = '';
  phoneNum: string = '';
  occupation: string = '';
  pass1: string = '';
  pass2: string = '';
  describe: string = '';
  data:string;
  constructor(private service: UserServiceService, private route: Router, private iab:InAppBrowser) {}

  ngOnInit() {
  }

  async userRegister(){
    await this.service.register(this.username,this.fname,this.lname,this.dob,this.email,this.phoneNum
      ,this.occupation,this.pass1,this.pass2,this.describe);
    this.data = JSON.parse(this.service.tempData.data);
    if(this.data['error'] == false){
      this.route.navigateByUrl(`user-login`);
    }else{
      if(this.data['errorMessage'] == "Identity already exists"){
        // Execute display of errorMessage
      }
      else if(this.data['errorMessage'] == "Query failed. Try again"){
        this.route.navigateByUrl(`login-signup-process`);
      }
    }
  }

  openBrowser(){
    this.iab.create('http://localhost/final-Djinnsend/php/','_system');
  }

}
