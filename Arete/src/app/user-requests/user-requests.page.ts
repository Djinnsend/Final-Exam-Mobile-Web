import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Router, Routes,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-requests',
  templateUrl: './user-requests.page.html',
  styleUrls: ['./user-requests.page.scss'],
})
export class UserRequestsPage implements OnInit {
  username: String;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.username = this.route.snapshot.params.username;
  }

}
