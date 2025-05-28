import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { OverlayService } from './../../../services/overlay.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  imports: [CommonModule, FormsModule, RouterLink, TranslatePipe],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  constructor(private overlayService: OverlayService) {}

  isChecked: boolean = false;
  isHovered: boolean = false;
  isSubmitted: boolean = false;
  isAttemptedSubmit = false;

  namePlaceholder: string = 'Your name goes here';
  emailPlaceholder: string = 'youremail@email.com';
  messagePlaceholder: string = 'your message';
  privacyPlaceholder: string = '';
  showMessageError = false;
  showSuccessOverlay = false;

  contactData = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  };

  http = inject(HttpClient);
  mailTest = true;

  post = {
    endPoint: 'https://devwithdavid.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    this.showMessageError = false;
    this.isAttemptedSubmit = true;

    if (ngForm.submitted && ngForm.form.valid && this.contactData.privacy) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.overlayService.show();
            ngForm.resetForm();
            this.resetPlaceholders();
            this.isAttemptedSubmit = false;
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (this.isEmptyInput()) {
      this.showInputError();
    }
  }

  isEmptyInput() {
    return (
      this.contactData.name === '' ||
      this.contactData.email === '' ||
      this.contactData.message === '' ||
      this.contactData.privacy === false
    );
  }

  showInputError() {
    return (
      (this.showMessageError = true),
      (this.namePlaceholder = 'You forgot to fill in your name!'),
      (this.emailPlaceholder = 'Your email is required!'),
      (this.messagePlaceholder = 'What do you need to develop?'),
      (this.privacyPlaceholder = 'Please accept the privacy policy!')
    );
  }

  resetPlaceholders() {
    this.namePlaceholder = 'Your name goes here';
    this.emailPlaceholder = 'youremail@email.com';
    this.messagePlaceholder = 'your message';
    this.privacyPlaceholder = '';
  }

  getCheckboxImage(): string {
    if (this.contactData.privacy && this.isHovered) {
      return './images/checkbox_checked_hover.png';
    } else if (this.contactData.privacy) {
      return './images/checkbox_checked.png';
    } else if (this.isHovered) {
      return './images/checkbox_unchecked_hover.png';
    } else {
      return './images/checkbox_unchecked.png';
    }
  }
}
