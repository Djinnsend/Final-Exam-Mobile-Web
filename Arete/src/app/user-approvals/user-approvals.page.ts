import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Router, Routes,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-approvals',
  templateUrl: './user-approvals.page.html',
  styleUrls: ['./user-approvals.page.scss'],
})
export class UserApprovalsPage implements OnInit {
  username: String;
  requests: Array<object>;
  constructor(private service: UserServiceService, private route: ActivatedRoute) {}

  async ngOnInit() {
    this.username = this.route.snapshot.params.username;
    await this.service.approvals(this.username);
    this.requests = JSON.parse(this.service.tempData.data);
    console.log(this.requests);
  }

}
