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

  ngOnInit() {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: false,
    });
  }

  showSuccessOverlay() {
    this.showOverlay = true;
    this.fadingOut = false;

    setTimeout(() => {
      this.fadingOut = true;

      setTimeout(() => {
        this.showOverlay = false;
      }, 300); // fadeOut duration
    }, 3000);
  }
}
