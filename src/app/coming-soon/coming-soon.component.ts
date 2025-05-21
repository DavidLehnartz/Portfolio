import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-coming-soon',
  imports: [HeaderComponent, TranslatePipe],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.scss',
})
export class ComingSoonComponent {}
