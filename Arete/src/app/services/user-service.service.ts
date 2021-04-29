import { Injectable } from '@angular/core';
import { HTTP, HTTPResponse } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  returnData: String;
  tempData: HTTPResponse;
  events: Array<object>;
  event: Array<object>;
  request: HTTPResponse;
  constructor(private HTTP:HTTP, private client:HttpClient, private notify:LocalNotifications) {}

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

  async participate(username:String,title:String, host:String){
    this.request = await this.HTTP.post('http://localhost/final-Djinnsend/php/api/Org/addRequest.php',
    {"username": `${username}`,"title": `${title}`, "host":`${host}`}, {});
  }

  async requests(username:String){
    this.tempData = await this.HTTP.post('http://localhost/final-Djinnsend/php/api/User/getUserRequests.php',
    {"username": `${username}`}, {});
  }

  async approvals(username:String){
    this.tempData = await this.HTTP.post('http://localhost/final-Djinnsend/php/api/User/getUserApprovals.php',
    {"username": `${username}`}, {});
  }

  notification(){
    this.notify.schedule({
      id:1,
      text:"Your request has been sent. Approval Pending",
      data: {secret: 'secret'},
      icon:"../../assets/icon/volunteer1.jpg",
      silent:true,
      autoClear:true,
      lockscreen:true,
      foreground:true,
      launch:false,
      vibrate:true,
      color:"orange"
    });
  }

 


}
