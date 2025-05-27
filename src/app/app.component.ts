import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import * as AOS from 'aos';
import { CommonModule } from '@angular/common';
import { OverlayService } from './services/overlay.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, TranslatePipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showOverlay = false;
  fadingOut = false;

  constructor(public overlayService: OverlayService) {}

  title = 'portfolio';

  /**
   * Lifecycle hook that is called after Angular has initialized the component.
   *
   * Initializes the AOS (Animate On Scroll) library with custom animation settings:
   * - `duration`: animation duration in milliseconds.
   * - `easing`: easing function for animations.
   * - `once`: whether animations should happen only once or every time the element scrolls into view.
   */
  ngOnInit() {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: false,
    });
  }

  /**
   * Displays a temporary success overlay with a fade-out animation.
   *
   * - Sets `showOverlay` to `true` to display the overlay.
   * - After 3 seconds, begins fading out by setting `fadingOut` to `true`.
   * - After an additional 300ms, hides the overlay by setting `showOverlay` to `false`.
   */
  showSuccessOverlay() {
    this.showOverlay = true;
    this.fadingOut = false;

    setTimeout(() => {
      this.fadingOut = true;

      setTimeout(() => {
        this.showOverlay = false;
      }, 300);
    }, 3000);
  }
}
