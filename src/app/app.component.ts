import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //prueba. Title se llamaba Tourney Time.
  title = window.location.pathname;
  constructor(private router:Router){
    console.log(this.title);
  }
}
