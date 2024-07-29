import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchlistPageComponent } from './searchlist-page.component';

describe('SearchlistPageComponent', () => {
  let component: SearchlistPageComponent;
  let fixture: ComponentFixture<SearchlistPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchlistPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchlistPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
