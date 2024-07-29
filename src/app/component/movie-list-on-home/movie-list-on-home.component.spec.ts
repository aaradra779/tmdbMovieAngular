import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListOnHomeComponent } from './movie-list-on-home.component';

describe('MovieListOnHomeComponent', () => {
  let component: MovieListOnHomeComponent;
  let fixture: ComponentFixture<MovieListOnHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieListOnHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieListOnHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
