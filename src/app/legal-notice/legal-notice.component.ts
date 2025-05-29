import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { TranslatePipe } from '@ngx-translate/core';
import { FooterComponent } from '../main-content/contact-me/footer/footer.component';

@Component({
  selector: 'app-legal-notice',
  imports: [HeaderComponent, TranslatePipe, FooterComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss',
})
export class LegalNoticeComponent {}
