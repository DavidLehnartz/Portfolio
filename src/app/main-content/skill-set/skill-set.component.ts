import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-skill-set',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss',
})
export class SkillSetComponent {
  firstImage: string = './images/pull_to_peel_sticker.png';
  lastImage: string = './images/pull_to_peel_uncovered_sticker.png';
  transImage: string = './images/pull_to_peel_half_sticker.png';
  currentImage: string = this.firstImage;
  isImageAActive: boolean = true;
  timeout: number = 0;
  timeoutImg: number = 200;

  changeImage() {
    this.currentImage = this.lastImage;

    if (this.isImageAActive) {
      this.currentImage = this.lastImage;
    } else {
      this.currentImage = this.firstImage;
    }
    this.isImageAActive = !this.isImageAActive;
  }
}
