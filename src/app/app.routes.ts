import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ProjectJoinComponent } from './single-projects/project-join/project-join.component';

export const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'join', component: ProjectJoinComponent },
];
