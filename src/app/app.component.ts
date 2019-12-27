import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'guitarDojo';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'phone',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/contactPageAssets/phone-alt-solid.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'email',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/contactPageAssets/envelope-open-solid.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'address',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/contactPageAssets/map-marker-alt-solid.svg')
    );
  }
}
