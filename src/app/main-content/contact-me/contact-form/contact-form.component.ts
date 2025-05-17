import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  imports: [CommonModule, FormsModule, RouterLink, TranslatePipe],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  isChecked: boolean = false;
  isHovered: boolean = false;
  isSubmitted: boolean = false;

  namePlaceholder: string = 'Your name goes here';
  emailPlaceholder: string = 'youremail@email.com';
  messagePlaceholder: string = 'your message';
  privacyPlaceholder: string = '';
  showMessageError = false;
  showSuccessOverlay = false;

  @Output() emailSent = new EventEmitter<void>();

  contactData = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  };

  getContactData() {
    return this.contactData;
  }

  getCheckboxImage(): string {
    if (this.contactData.privacy && this.isHovered) {
      return './icons/checkbox_checked_hover.png';
    } else if (this.contactData.privacy) {
      return './icons/checkbox_checked.png';
    } else if (this.isHovered) {
      return './icons/checkbox_unchecked_hover.png';
    } else {
      return './icons/checkbox_unchecked.png';
    }
  }

  onSubmit(ngForm: NgForm) {
    this.showMessageError = false;

    if (ngForm.valid && ngForm.submitted && this.contactData.privacy) {
      console.log(this.contactData);

      this.showSuccessOverlay = true;

      setTimeout(() => {
        this.showSuccessOverlay = false;
      }, 3000);
    } else if (
      this.contactData.name === '' ||
      this.contactData.email === '' ||
      this.contactData.message === '' ||
      this.contactData.privacy === false
    ) {
      this.showMessageError = true;
      this.namePlaceholder = 'You forgot to fill in your name!';
      this.emailPlaceholder = 'Your email is required!';
      this.messagePlaceholder = 'What do you need to develop?';
      this.privacyPlaceholder = 'Please accept the privacy policy!';
    }
  }
}
