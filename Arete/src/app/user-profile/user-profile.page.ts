import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Router, Routes,ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  username: String;
  temp:String;
  profile: Object;

  phoneNumber:String;
  mail:String;
  fname:String;
  lname:String;
  date:String;
  occupation:String;
  describe:String;
  constructor(private route: ActivatedRoute, private service:UserServiceService) { }

  async ngOnInit() {
    this.username = this.route.snapshot.params.username;
    await this.service.getProfile(this.username);
    this.temp = JSON.parse(this.service.profile.data);
    this.profile = this.temp[0];
    this.assign();
  }

  assign(){
    this.phoneNumber = this.profile['phoneNum'];
    this.mail = this.profile['email'];
    this.fname = this.profile['fname'];
    this.lname = this.profile['lname'];
    this.date = this.profile['birthDate'];
    this.occupation = this.profile['occupation'];
    this.describe = this.profile['user_describe'];
    console.log(this.profile);
  }

}
