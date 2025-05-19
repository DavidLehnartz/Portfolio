import { Component } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from '../contact-me/footer/footer.component';
import { TranslatePipe } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-me',
  imports: [ContactFormComponent, FooterComponent, TranslatePipe, CommonModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
})
export class ContactMeComponent {}
