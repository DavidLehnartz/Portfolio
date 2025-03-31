import { Component } from '@angular/core';
import { ProjectHeaderComponent } from '../project-header/projects-header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-join',
  imports: [ProjectHeaderComponent, RouterLink],
  templateUrl: './project-join.component.html',
  styleUrl: './project-join.component.scss',
})
export class ProjectJoinComponent {}
