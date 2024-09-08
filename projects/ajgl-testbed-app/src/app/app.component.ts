import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AjglSideMenuComponent, TitleColor } from 'ajgl-side-menu'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AjglSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ajgl-testbed-app';

  TitleColor = TitleColor;
  isAuthenticated = signal(true);
}
