import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesearchComponent } from './moviesearch.component';

describe('MoviesearchComponent', () => {
  let component: MoviesearchComponent;
  let fixture: ComponentFixture<MoviesearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesearchComponent]
    });
    fixture = TestBed.createComponent(MoviesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
