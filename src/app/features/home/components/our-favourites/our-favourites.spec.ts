import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurFavourites } from './our-favourites';

describe('OurFavourites', () => {
  let component: OurFavourites;
  let fixture: ComponentFixture<OurFavourites>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurFavourites]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurFavourites);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
