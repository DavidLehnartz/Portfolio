import { Component } from '@angular/core';
import { ProjectHeaderComponent } from '../project-header/projects-header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-willy-the-wizard',
  imports: [ProjectHeaderComponent, RouterLink],
  templateUrl: './project-willy-the-wizard.component.html',
  styleUrl: './project-willy-the-wizard.component.scss',
})
export class ProjectWillyTheWizardComponent {}
