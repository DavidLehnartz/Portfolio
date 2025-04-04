import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { SingleProjectsComponent } from './single-projects/single-projects.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,

    /* MainContentComponent, */
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';
}
