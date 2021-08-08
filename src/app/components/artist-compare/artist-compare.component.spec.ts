import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistCompareComponent } from './artist-compare.component';

describe('ArtistCompareComponent', () => {
  let component: ArtistCompareComponent;
  let fixture: ComponentFixture<ArtistCompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistCompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
