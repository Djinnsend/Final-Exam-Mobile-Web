import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Router, Routes,ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-landing-page',
  templateUrl: './user-landing-page.page.html',
  styleUrls: ['./user-landing-page.page.scss'],
})
export class UserLandingPagePage implements OnInit {
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
  constructor(private route: ActivatedRoute, private service: UserServiceService) { }

  async ngOnInit() {
    this.event_id = this.route.snapshot.params.eventID;
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

  participate(){}



}
