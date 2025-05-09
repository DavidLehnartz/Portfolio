import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,

    
  ],
  templateUrl: './app.component.html',
  styleUrls:  ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  ngOnInit() {
    AOS.init({
      duration: 800, // Animationsdauer in ms
      easing: 'ease-out', // Übergangsart
      once: false, // Nur einmal beim ersten Scroll
    });
  }
}
