import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import { Icon } from '../models/icon.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomIconService {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  addIcon(icon: Icon) {
    this.matIconRegistry.addSvgIcon(
      icon.label,
      this.domSanitizer.bypassSecurityTrustResourceUrl(icon.src)
    );
  }

  addIcons(icons: Icon[]) {
    if (icons.length) {
      icons.forEach(icon => {
        this.matIconRegistry.addSvgIcon(
          icon.label,
          this.domSanitizer.bypassSecurityTrustResourceUrl(icon.src)
        )
      });
    }
  }
}
