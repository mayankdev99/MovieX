import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesSectionComponent } from './series-section.component';

describe('SeriesSectionComponent', () => {
  let component: SeriesSectionComponent;
  let fixture: ComponentFixture<SeriesSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeriesSectionComponent]
    });
    fixture = TestBed.createComponent(SeriesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
