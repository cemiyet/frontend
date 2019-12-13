import { Component } from '@angular/core';

import { ApiService } from 'api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'cemiyet';

  constructor(private apiService: ApiService) {
    console.log('app created');
  }
}
