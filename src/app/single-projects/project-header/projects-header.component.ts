import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects-header',
  imports: [RouterLink],
  templateUrl: './projects-header.component.html',
  styleUrl: './projects-header.component.scss'
})
export class ProjectHeaderComponent {


  isEnglishActive: boolean = true;

  setLanguage(string: 'en' | 'de') {
    this.isEnglishActive = string === 'en';
  }
}
