import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export enum Theme {
  Dark = 'dark',
  Light = 'light'
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  currentTheme: Theme = Theme.Dark;

  //private _onThemeChange$: Subject<Theme> = new Subject<Theme>();
  private _onThemeChange$: BehaviorSubject<Theme> = new BehaviorSubject<Theme>(this.currentTheme);

  onThemeChange$ = this._onThemeChange$.asObservable();

  constructor() { }

  changeTheme(newTheme: Theme): void {
    this.currentTheme = newTheme;
    this._onThemeChange$.next(newTheme);
  }
}
