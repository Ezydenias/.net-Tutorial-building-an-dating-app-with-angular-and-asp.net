import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { IUser } from "./_models/user";
import { AccountService } from "./_services/account.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Yiffylicious';
  users: any;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser() {
    const user: IUser = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }


}
