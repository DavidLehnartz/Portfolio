import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/* import { AboutMeComponent } from "../about-me/about-me.component"; */

@Component({
  selector: 'app-my-craft',
  imports: [RouterLink /* , AboutMeComponent */],
  templateUrl: './my-craft.component.html',
  styleUrl: './my-craft.component.scss',
})
export class MyCraftComponent {}
