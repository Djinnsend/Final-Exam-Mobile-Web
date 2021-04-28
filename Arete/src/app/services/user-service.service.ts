import { Injectable } from '@angular/core';
import { HTTP, HTTPResponse } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  returnData: String;
  tempData: HTTPResponse;
  User: object;
  constructor(private HTTP:HTTP, private client:HttpClient) {}

  async login(email:String, username:String, password:String){
    this.tempData = await this.HTTP.post('http://localhost/final-Djinnsend/php/api/User/getUserLogin.php', 
    {"Username": `${username}`,"Email": `${email}`, "Password": `${password}`}, {});
  }



}
