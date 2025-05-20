import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { TranslatePipe } from '@ngx-translate/core';
import { FooterComponent } from "../main-content/contact-me/footer/footer.component";

@Component({
  selector: 'app-coming-soon',
  imports: [HeaderComponent, TranslatePipe, FooterComponent],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.scss',
})
export class ComingSoonComponent {}
