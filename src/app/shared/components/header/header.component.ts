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
  isBurgerMenuOpen: boolean = false;

  /**
   * Initializes the translation service by setting up available language translations
   * and selecting the default language based on saved user preference or fallback.
   *
   * - Loads English and German translations into the TranslateService.
   * - Sets English as the default language.
   * - Reads the user's preferred language from localStorage (key: 'app_language') if available.
   * - Switches to the saved or default language using `switchLanguage()`.
   *
   * @param translate The translation service used to manage internationalization.
   */
  constructor(private translate: TranslateService) {
    this.translate.setTranslation('en', translationsEN);
    this.translate.setTranslation('de', translationsDE);
    this.translate.setDefaultLang('en');

    const savedLang = localStorage.getItem('app_language') || 'en';
    this.switchLanguage(savedLang as 'en' | 'de');
  }

  /**
   * Switches the application language using the translation service.
   *
   * - Applies the selected language.
   * - Updates a flag to reflect if English is active.
   * - Persists the language preference in localStorage.
   *
   * @param lang The language to switch to ('en' or 'de').
   */
  switchLanguage(lang: 'en' | 'de') {
    this.translate.use(lang);
    this.isEnglishActive = lang === 'en';
    localStorage.setItem('app_language', lang);
  }

  /**
   * Returns the image path for the open burger menu icon.
   *
   * - If the menu is hovered, a hover icon is returned.
   * - Otherwise, the default icon is used.
   *
   * @returns The relative path to the appropriate open burger menu icon.
   */
  getBurgerMenuImgOpen(): string {
    if (this.isHovered) {
      return './images/burger_hover.png';
    } else {
      return './images/burger_default.png';
    }
  }

  /**
   * Returns the image path for the close burger menu icon.
   *
   * - If the menu is both hovered and open, a hover-close icon is returned.
   * - Otherwise, the default close icon is used.
   *
   * @returns The relative path to the appropriate close burger menu icon.
   */
  getBurgerMenuImgClose(): string {
    if (this.isHovered && this.isBurgerMenuOpen) {
      return './images/burger_close_hover.png';
    } else {
      return './images/burger_close.png';
    }
  }

  /**
   * Toggles the state of the burger menu between open and closed.
   *
   * - When closing the menu, also resets the hover state to `false`.
   */
  toggleBurgerMenu() {
    this.isBurgerMenuOpen = !this.isBurgerMenuOpen;

    if (!this.isBurgerMenuOpen) {
      this.isHovered = false;
    }
  }
}
