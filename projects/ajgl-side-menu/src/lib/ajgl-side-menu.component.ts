import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export enum TitleColor {
  red    = 'text-red-500',
  green  = 'text-green-500',
  blue   = 'text-blue-500',
  purple = 'text-purple-500',
}

@Component({
  selector: 'lib-ajgl-side-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: "./ajgl-side-menu.component.html",
  styles: ``
})
export class AjglSideMenuComponent {

  isAuthenticated = input(false);

  title = input('AJGL');
  subTitle = input('Corp');

  titleColor = input<TitleColor>( TitleColor.purple );

  onSignOut = output();
  onSignIn = output();
}
