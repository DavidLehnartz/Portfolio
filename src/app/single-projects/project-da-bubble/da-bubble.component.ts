import { Component } from '@angular/core';
import { ProjectHeaderComponent } from '../project-header/projects-header.component';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-da-bubble',
  imports: [ProjectHeaderComponent, RouterLink, TranslatePipe],
  templateUrl: './da-bubble.component.html',
  styleUrl: './da-bubble.component.scss',
})
export class ProjectDaBubbleComponent {}
