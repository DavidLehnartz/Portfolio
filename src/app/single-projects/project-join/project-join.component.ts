import { Component } from '@angular/core';
import { ProjectHeaderComponent } from '../project-header/projects-header.component';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-project-join',
  imports: [ProjectHeaderComponent, RouterLink, TranslatePipe],
  templateUrl: './project-join.component.html',
  styleUrl: './project-join.component.scss',
})
export class ProjectJoinComponent {}
