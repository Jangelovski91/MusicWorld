import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCompareComponent } from './navbar-compare.component';

describe('NavbarCompareComponent', () => {
  let component: NavbarCompareComponent;
  let fixture: ComponentFixture<NavbarCompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarCompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
