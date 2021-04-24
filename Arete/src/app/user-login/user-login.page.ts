import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.page.html',
  styleUrls: ['./user-login.page.scss'],
})
export class UserLoginPage implements OnInit {

  username: string = '';
  email: string = '';
  password: string = '';
  return: Array<object>;
  constructor() { }

  ngOnInit() {
  }

}
