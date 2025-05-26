import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {}
