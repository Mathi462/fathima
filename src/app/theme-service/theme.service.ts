import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class ThemeService {
  private _theme: Subject<boolean> = new Subject<boolean>();
  theme = this._theme.asObservable();
  setTheme(isTheme: boolean) {
    this._theme.next(isTheme);
  }

}