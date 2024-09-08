# AjglSideMenu

Side menu for company created in Angular by Ajgl

# Install
``` npm i ajgl-side-menu ```

# Usage

1. ```import { AjglSideMenuComponent } from 'ajgl-side-menu';```

2. Import the sidemenu in the component ts

@Component({
    selector: 'app-admin-layout',
    standalone: true,
    imports: [
      CommonModule, RouterOutlet,
      SideMenuComponent, AjglSideMenuComponent
    ],
    templateUrl: './admin-layout.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
  })

  Properties:
  [isAuthenticated]
  titleColor
  title
  subtitle
  [onSignIn]
  [onSignOut]

  Put this code in html

  <lib-ajgl-side-menu
    [isAuthenticated]="isAuthenticated()"
    [titleColor]="TitleColor.blue"
    title="Your company title"
    subtitle="Your company subtitle"
    (onSignIn)="onLogin()"
    (onSignOut)="onLogout()"
  />
