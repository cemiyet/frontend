import { Component, OnInit } from '@angular/core';

import { ApiService } from '@cemiyet/api';

@Component({
  selector: 'cemiyet-web-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() { }

  onLogin(event: Event) {
    console.log('onLoginClicked: ', event);
  }
}
