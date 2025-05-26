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
    this.isBurgerMenuOpen = !this.isBurgerMenuOpen;

    if (!this.isBurgerMenuOpen) {
      this.isHovered = false;
    }
  }
}
