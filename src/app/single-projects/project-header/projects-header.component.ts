import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import translationsEN from '../../../../public/i18n/en.json';
import translationsDE from '../../../../public/i18n/de.json';

@Component({
  selector: 'app-projects-header',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './projects-header.component.html',
  styleUrl: './projects-header.component.scss',
})
export class ProjectHeaderComponent {
  isEnglishActive: boolean = true;
  isHovered: boolean = false;
  isBurgerMenuOpen = false;

  constructor(private translate: TranslateService) {
    this.translate.setTranslation('en', translationsEN);
    this.translate.setTranslation('de', translationsDE);
    this.translate.setDefaultLang('en');

    const savedLang = localStorage.getItem('app_language') || 'en';
    this.switchLanguage(savedLang as 'en' | 'de');
  }

  switchLanguage(lang: 'en' | 'de') {
    this.translate.use(lang);
    this.isEnglishActive = lang === 'en';
    localStorage.setItem('app_language', lang);
  }

  getBurgerMenuImgOpen(): string {
    if (this.isHovered) {
      return './icons/burger_hover.png';
    } else {
      return './icons/burger_default.png';
    }
  }

  getBurgerMenuImgClose(): string {
    if (this.isHovered && this.isBurgerMenuOpen) {
      return './icons/burger_close_hover.png';
    } else {
      return './icons/burger_close.png';
    }
  }

  toggleBurgerMenu() {
    console.log('Toggle clicked');
    this.isBurgerMenuOpen = !this.isBurgerMenuOpen;

    if (!this.isBurgerMenuOpen) {
      this.isHovered = false;
    }
  }
}
