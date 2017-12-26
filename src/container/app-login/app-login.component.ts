import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {
  userName: string;
  password: any;
  constructor() { }

  ngOnInit() {
  }
  login() {
    // code
  }
}
