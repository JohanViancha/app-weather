import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsSearchComponent } from './buttons-search.component';

describe('ButtonsSearchComponent', () => {
  let component: ButtonsSearchComponent;
  let fixture: ComponentFixture<ButtonsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
