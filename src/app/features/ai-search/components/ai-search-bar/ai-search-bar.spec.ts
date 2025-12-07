import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiSearchBar } from './ai-search-bar';

describe('AiSearchBar', () => {
  let component: AiSearchBar;
  let fixture: ComponentFixture<AiSearchBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiSearchBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiSearchBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
