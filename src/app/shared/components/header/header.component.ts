import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import translationsEN from '../../../../../public/i18n/en.json';
import translationsDE from '../../../../../public/i18n/de.json';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isEnglishActive: boolean = true;
  public currentLang = 'EN';

  constructor(private translate: TranslateService) {
    this.translate.setTranslation('en', translationsEN);
    this.translate.setTranslation('de', translationsDE);
    this.translate.setDefaultLang('en');
  }

  setLanguage(string: 'en' | 'de') {
    this.isEnglishActive = string === 'en';
  }

  public changeLang(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang === 'en' ? 'EN' : 'DE';
  }
}
