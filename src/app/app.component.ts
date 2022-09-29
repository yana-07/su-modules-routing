import { DOCUMENT } from '@angular/common';
import { Component, Inject, Injectable } from '@angular/core';
import { ENGINES_TOKEN, ENVIRONMENT_TOKEN } from './app.module';
import { Theme, ThemeService } from './core/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'su-modules-routing';

  // constructor(
  //   @Inject(ENGINES_TOKEN) private engines: Engine[],
  //   @Inject(ENVIRONMENT_TOKEN) private env: string,
  //   private engine: Engine) {
  //   console.log(engines)
  //   console.log(env)
  //   console.log(engine)
  // }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private themeService: ThemeService) {
    this.themeService.onThemeChange$.subscribe((theme) => {
      const themeIsDark = theme === Theme.Dark;
      if (themeIsDark) {
        this.document.body.classList.add('dark-theme');
      } else {
        this.document.body.classList.remove('dark-theme');
      }
    });
  }
}

export abstract class Engine {
}

@Injectable()
export class PetrolEngine extends Engine{
}

@Injectable()
export class DieselEngine extends Engine{
}
