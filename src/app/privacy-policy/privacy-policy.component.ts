import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { TranslatePipe } from '@ngx-translate/core';
import { FooterComponent } from "../main-content/contact-me/footer/footer.component";

@Component({
  selector: 'app-privacy-policy',
  imports: [HeaderComponent, TranslatePipe, FooterComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

}
