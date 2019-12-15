import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private uri = 'http://localhost:5000/';

  constructor() {
    console.log('api service created');
    console.log(this.uri);
  }
}
