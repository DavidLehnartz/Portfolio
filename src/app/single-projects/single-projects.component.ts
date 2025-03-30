import { Component } from '@angular/core';
import { ProjectJoinComponent } from './project-join/project-join.component';
import { ProjectWillyTheWizardComponent } from "./project-willy-the-wizard/project-willy-the-wizard.component";
import { ProjectDaBubbleComponent } from "./project-da-bubble/da-bubble.component";

@Component({
  selector: 'app-single-projects',
  imports: [
    ProjectJoinComponent,
    ProjectWillyTheWizardComponent,
    ProjectDaBubbleComponent
    ],
  templateUrl: './single-projects.component.html',
  styleUrl: './single-projects.component.scss'
})
export class SingleProjectsComponent {

} 
