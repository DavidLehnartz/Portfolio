import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { AboutMeComponent } from './about-me/about-me.component';

@Component({
  selector: 'app-main-content',
  imports: [
    HeaderComponent,
    AboveTheFoldComponent,
    AboutMeComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {}
