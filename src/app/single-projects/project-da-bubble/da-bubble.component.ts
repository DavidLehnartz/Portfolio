import { Component } from '@angular/core';
import { ProjectHeaderComponent } from '../project-header/projects-header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-da-bubble',
  imports: [ProjectHeaderComponent, RouterLink],
  templateUrl: './da-bubble.component.html',
  styleUrl: './da-bubble.component.scss',
})
export class ProjectDaBubbleComponent {}
