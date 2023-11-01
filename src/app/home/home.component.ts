import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  styles: [],
  template: `
    <div class="flex flex-col justify-center items-center content-center mt-3">
      <span class="mat-display-2">Hello, Limoncu!</span>
      <button mat-raised-button color="primary" routerLink="/manager">Login</button>
    </div>
  `
})
export class HomeComponent {

}
