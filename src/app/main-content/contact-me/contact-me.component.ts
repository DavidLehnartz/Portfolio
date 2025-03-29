import { Component } from '@angular/core';
import { ContactFormComponent } from "./contact-form/contact-form.component";

@Component({
  selector: 'app-contact-me',
  imports: [ContactFormComponent],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

}
