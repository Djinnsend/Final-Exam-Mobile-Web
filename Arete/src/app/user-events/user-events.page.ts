import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Router, Routes,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-events',
  templateUrl: './user-events.page.html',
  styleUrls: ['./user-events.page.scss'],
})
export class UserEventsPage implements OnInit {
  username: String;
  events: Array<object>;
  constructor(private service: UserServiceService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.eventDisplay();
    this.username = this.route.snapshot.params.username; 
  }

  async eventDisplay(){
    await this.service.allEvents();
    this.events = this.service.events;
  }
}
