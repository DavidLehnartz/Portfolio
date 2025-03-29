import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { MyCraftComponent } from './my-craft/my-craft.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactMeComponent } from "./contact-me/contact-me.component";

@Component({
  selector: 'app-main-content',
  imports: [
    HeaderComponent,
    AboveTheFoldComponent,
    AboutMeComponent,
    SkillSetComponent,
    MyCraftComponent,
    TestimonialsComponent,
    ContactMeComponent,
],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {}
