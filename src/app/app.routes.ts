import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ProjectJoinComponent } from './single-projects/project-join/project-join.component';
import { ProjectWillyTheWizardComponent } from './single-projects/project-willy-the-wizard/project-willy-the-wizard.component';
import { ProjectDaBubbleComponent } from './single-projects/project-da-bubble/da-bubble.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: MainContentComponent,
  },
  {
    path: 'join',
    component: ProjectJoinComponent,
  },
  {
    path: 'willyTheWizard',
    component: ProjectWillyTheWizardComponent,
  },
  {
    path: 'daBubble',
    component: ProjectDaBubbleComponent,
  },
  {
    path: 'legalNotice',
    component: LegalNoticeComponent,
  },
  {
    path: 'privacyPolicy',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'comingSoon',
    component: ComingSoonComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
