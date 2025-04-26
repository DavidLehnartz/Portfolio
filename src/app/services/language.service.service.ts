import { Injectable } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import translationsEN from '../../../public/i18n/en.json';
import translationsDE from '../../../public/i18n/de.json';

@Injectable({
  providedIn: 'root',
})
export class AboveTheFoldComponent {
  /* isEnglishActive: boolean = true; */

  constructor(/* private translate: TranslateService */) {
    /* this.translate.setTranslation('en', translationsEN);
    this.translate.setTranslation('de', translationsDE);
    this.translate.setDefaultLang('en');

    const savedLang = localStorage.getItem('app_language') || 'en';
    this.switchLanguage(savedLang as 'en' | 'de'); */
  }

  /* switchLanguage(lang: 'en' | 'de') {
    this.translate.use(lang);
    this.isEnglishActive = lang === 'en';
    localStorage.setItem('app_language', lang);
  } */
}
