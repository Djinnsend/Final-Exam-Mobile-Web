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
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.username = this.route.snapshot.params.username;
  }

}
