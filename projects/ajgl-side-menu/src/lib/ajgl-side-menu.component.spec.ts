import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjglSideMenuComponent } from './ajgl-side-menu.component';
import { provideRouter } from '@angular/router';

describe('AjglSideMenuComponent', () => {
  let component: AjglSideMenuComponent;
  let fixture: ComponentFixture<AjglSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjglSideMenuComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjglSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSignIn when button is clicked', () => {

    spyOn(component.onSignIn, 'emit');
    fixture.componentRef.setInput('isAuthenticated', false);
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('[data-login]') as HTMLButtonElement;

    button.click();
    expect(component.onSignIn.emit).toHaveBeenCalled();

  });

  it('should call onSignOut when button is clicked', () => {

    spyOn(component.onSignOut, 'emit');
    fixture.componentRef.setInput('isAuthenticated', true);
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('[data-logout]') as HTMLButtonElement;

    button.click();
    expect(component.onSignOut.emit).toHaveBeenCalled();

  });
});
