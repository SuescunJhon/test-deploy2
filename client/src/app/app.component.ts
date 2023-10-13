import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  //Create a mock ninja turtle variablie
  ninjaTurtles = [ 
    { 'id': 0, 'name': 'Raffaello' },
    { 'id': 1, 'name': 'Donatello' },
    { 'id': 2, 'name': 'Michelangelo' },
    { 'id': 3, 'name': 'Leonardo' },
  ]
  //We use dependency injection to get an instance of HttpClient
  constructor(private http: HttpClient) {
    //this.http.get() <- We will request the ninjaTurtles list to the server
  }
}
