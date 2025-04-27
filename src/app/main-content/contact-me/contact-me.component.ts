import { Component } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from '../contact-me/footer/footer.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-me',
  imports: [ContactFormComponent, FooterComponent, TranslatePipe],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
})
export class ContactMeComponent {}
