import { Component } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {MatIconRegistry} from "@angular/material/icon";

@Component({
  selector: 'app-root',
  template : `<mat-toolbar color="primary">
    <button mat-icon-button><mat-icon>menu</mat-icon></button>
    <mat-icon svgIcon="lemon"></mat-icon>
    <a mat-button routerLink="/home"><h1>LemonMart</h1></a>
    <span class="flex-spacer"></span>
    <button mat-icon-button>
      <mat-icon>account_circle</mat-icon>
    </button>
    <button mat-icon-button>
      <mat-icon>lock_open</mat-icon>
    </button>
    <button
      mat-mini-fab routerLink="/user/profile"
      matTooltip="Profile" aria-label="User Profile"
    >
      <mat-icon>account_circle</mat-icon>
    </button>
    <button
      mat-mini-fab routerLink="/user/logout"
      matTooltip="Logout" aria-label="Logout"
    >
      <mat-icon>lock_open</mat-icon>
    </button>
  </mat-toolbar>
  <router-outlet></router-outlet>`,
  styles: [
  ]
})
export class AppComponent {
  title = 'lemon-mart';

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'cat',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/img/icons/favicon-16x16.png'
      )
    )
  }
}
