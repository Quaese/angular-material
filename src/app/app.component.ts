import { CustomIconService } from './material/services/custom-icon.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  private svgIcons = [
    {label: 'quaese', src: '../assets/icons/quaese.svg'},
    {label: 'capricorn', src: '../assets/icons/steinbock.svg'},
    {label: 'lion', src: '../assets/icons/loewe.svg'},
  ];

  constructor(
    private customIconService: CustomIconService
  ) {
    this.customIconService.addIcon({label: 'schuetze', src: '../assets/icons/schuetze.svg'});
    this.customIconService.addIcons(this.svgIcons);
  }
}
