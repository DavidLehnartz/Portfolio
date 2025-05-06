import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import translationsEN from '../../../../public/i18n/en.json';
import translationsDE from '../../../../public/i18n/de.json';

@Component({
  selector: 'app-above-the-fold',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss',
})
export class AboveTheFoldComponent {
  constructor() {}
}
