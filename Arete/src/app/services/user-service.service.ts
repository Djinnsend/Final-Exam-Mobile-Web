import { Injectable } from '@angular/core';
import { HTTP, HTTPResponse } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  returnData: String;
  tempData: HTTPResponse;
  events: Array<object>;
  event: Array<object>;
  constructor(private HTTP:HTTP, private client:HttpClient) {}

  async login(email:String, username:String, password:String){
    this.tempData = await this.HTTP.post('http://localhost/final-Djinnsend/php/api/User/getUserLogin.php', 
    {"Username": `${username}`,"Email": `${email}`, "Password": `${password}`}, {});
  }

  async allEvents(){
    await fetch('http://localhost/final-Djinnsend/php/api/User/getAllEvents.php').
    then(response => response.json()).then(parsedData => this.events = parsedData);
  }

  async getEvent(id:number){
    this.tempData = await this.HTTP.post('http://localhost/final-Djinnsend/php/api/Org/getOrgEvent.php', 
    {"eventID":`${id}`}, {});
  }



}
