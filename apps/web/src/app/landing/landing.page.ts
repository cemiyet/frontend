import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss']
})
export class LandingPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  onLogin(event: Event) {
    console.log('onLoginClicked: ', event);
  }

  onRegister(event: Event) {
    console.log('onRegisterClicked: ', event);
  }
}
