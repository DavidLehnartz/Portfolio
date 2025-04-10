import { Component } from '@angular/core';
/* import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations'; */

@Component({
  selector: 'app-above-the-fold',
  imports: [],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss',
  /* animations: [
    trigger('fadeOut', [
      state(
        'normal',
        style({
          width: '120px',
          backgroundColor: '#3498db',
        })
      ),
      state(
        'hovered',
        style({
          width: '180px',
          backgroundColor: '#2ecc71',
        })
      ),
      transition('normal <=> hovered', animate('300ms ease-in-out')),
    ]),
  ], */
})
export class AboveTheFoldComponent {}
