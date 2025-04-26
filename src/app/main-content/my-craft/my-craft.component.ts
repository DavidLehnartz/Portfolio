import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-my-craft',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './my-craft.component.html',
  styleUrl: './my-craft.component.scss',
})
export class MyCraftComponent {}
