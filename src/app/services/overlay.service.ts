import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OverlayService {
  private _visible = new BehaviorSubject(false);
  public visible$ = this._visible.asObservable();

  /**
   * Displays the component or element by emitting `true` to the `_visible` subject,
   * then automatically hides it after 3 seconds by emitting `false`.
   *
   */
  show() {
    this._visible.next(true);
    setTimeout(() => this._visible.next(false), 3000);
  }
}
