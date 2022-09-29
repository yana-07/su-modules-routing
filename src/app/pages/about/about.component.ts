import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Theme, ThemeService } from 'src/app/core/theme.service';

const lightThemeImage = 'https://angular.io/assets/images/logos/angular/angular_solidBlack.svg';
const darkThemeImage = 'https://angular.io/assets/images/logos/angular/angular_whiteTransparent.svg';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  imgSource!: string;

  constructor(
    private titleService: Title,
    private themeService: ThemeService) { }

  ngOnInit(): void {
    this.titleService.setTitle('About Page');

    // Not necessary when working with a BehaviorSubject
    // if (this.themeService.currentTheme === Theme.Dark) {
    //   this.imgSource = darkThemeImage;
    // } else {
    //   this.imgSource = lightThemeImage;
    // }

    this.themeService.onThemeChange$.subscribe(() => {
      if (this.themeService.currentTheme === Theme.Dark) {
        this.imgSource = darkThemeImage;
      } else {
        this.imgSource = lightThemeImage;
      }
    });
  }

}
