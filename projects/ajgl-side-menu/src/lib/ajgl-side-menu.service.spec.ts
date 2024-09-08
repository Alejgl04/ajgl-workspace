import { TestBed } from '@angular/core/testing';

import { AjglSideMenuService } from './ajgl-side-menu.service';

describe('AjglSideMenuService', () => {
  let service: AjglSideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjglSideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
