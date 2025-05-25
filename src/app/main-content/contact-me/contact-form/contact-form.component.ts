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
    if (ngForm.submitted && ngForm.form.valid && this.contactData.privacy) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            /* console.log('email verschickt');
            console.log(this.contactData);
            console.log(response); */

            this.overlayService.show();
            ngForm.resetForm();
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

  /* onSubmit(ngForm: NgForm) {
    this.showMessageError = false;

    if (ngForm.valid && ngForm.submitted && this.contactData.privacy) {
      console.log(this.contactData);

      // this.showSuccessOverlay = true;
      this.overlayService.show();

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
  } */
}
