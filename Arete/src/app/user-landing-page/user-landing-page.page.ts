import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Router, Routes,ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-user-landing-page',
  templateUrl: './user-landing-page.page.html',
  styleUrls: ['./user-landing-page.page.scss'],
})
export class UserLandingPagePage implements OnInit {
  username:String;
  eventDetails:Object;
  host:String;
  link:String;
  endDate:String;
  mail:String;
  reward:String;
  goal:String;
  location:String;
  objective:String;
  requirements:String;
  title:String;
  accomodation:String;
  event_id:number;
  tempDetails: String;
  return:String;
  constructor(private route: ActivatedRoute, private send: Router,private service: UserServiceService, private notify:LocalNotifications) { }

  async ngOnInit() {
    this.event_id = this.route.snapshot.params.eventID;
    this.username = this.route.snapshot.params.username;
    await this.service.getEvent(this.event_id);
    this.tempDetails = JSON.parse(this.service.tempData.data);
    this.eventDetails = this.tempDetails[0];
    this.assign();
  }

  assign() {
    this.host = this.eventDetails["host"];
    this.link = this.eventDetails["applicationLink"];
    this.endDate = this.eventDetails["eventEndDate"];
    this.mail = this.eventDetails["eventMail"];
    this.reward = this.eventDetails["eventReward"];
    this.goal = this.eventDetails["goal"];
    this.location = this.eventDetails["location"];
    this.objective = this.eventDetails["objective"];
    this.requirements = this.eventDetails["requirements"];
    this.title = this.eventDetails["title"];
    this.accomodation = this.eventDetails['accomodation'];
  }

  async participate(){
    await this.service.participate(this.username,this.title,this.host);
    this.return = JSON.parse(this.service.request.data);
    if (this.return['success'] == true){
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
        this.send.navigateByUrl(`user-events/${this.username}`);
    }else{
      this.notify.schedule({
      id:1,
      text:"Request Failed. Please try again",
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
    this.send.navigateByUrl(`user-events/${this.username}`);
  }
  }



}
