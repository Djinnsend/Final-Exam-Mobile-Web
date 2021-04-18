import { Component, OnInit } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.page.html',
  styleUrls: ['./user-login.page.scss'],
})
export class UserLoginPage implements OnInit {

  // username: string = 'ADMIN';
  // email: string = 'admin@admin.com';
  // password: string = '1234';
  // return: Array<object>;
  constructor(private http: HttpClient) { 

  }

  ngOnInit() {
  }

  login(){
    
  }

}
