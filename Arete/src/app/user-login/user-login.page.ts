import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.page.html',
  styleUrls: ['./user-login.page.scss'],
})
export class UserLoginPage implements OnInit {

  username: string = 'ADMIN';
  email: string = 'admin@admin.com';
  password: string = '1234';
  return: Array<object>;
  data:object;
  constructor(private HTTP:HTTP, private client:HttpClient) { }

  ngOnInit() {
  }

  login(){
    this.HTTP.post('http://localhost/final-Djinnsend/php/api/User/getUserLogin.php', {"Username": `${this.username}`,"Email": `${this.email}`, "Password": `${this.password}`}, {});
    // console.log(this.return);
    console.log("hello");
  }

  fetch(){
    // this.client.get('http://localhost/final-Djinnsend/php/api/User/getAllEvents.php').subscribe (data => {
    //   console.log(data);
    // })
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    // const requestOptions = new RequestOptions({ headers: headers });
    this.data = {"Username": this.username,"Email": this.email, "Password": this.password};
    this.client.post('http://localhost/final-Djinnsend/php/api/User/getUserLogin.php', JSON.stringify(this.data), {}).subscribe(data => {
      console.log(data['_body']);
    });
    console.log("hello");
  }

}
