import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSeriesComponent } from './filter-series.component';

describe('FilterSeriesComponent', () => {
  let component: FilterSeriesComponent;
  let fixture: ComponentFixture<FilterSeriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterSeriesComponent]
    });
    fixture = TestBed.createComponent(FilterSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
