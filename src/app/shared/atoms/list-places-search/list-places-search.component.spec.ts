import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlacesSearchComponent } from './list-places-search.component';

describe('ListPlacesSearchComponent', () => {
  let component: ListPlacesSearchComponent;
  let fixture: ComponentFixture<ListPlacesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPlacesSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPlacesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
