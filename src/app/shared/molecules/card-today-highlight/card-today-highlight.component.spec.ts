import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTodayHighlightComponent } from './card-today-highlight.component';

describe('CardTodayHighlightComponent', () => {
  let component: CardTodayHighlightComponent;
  let fixture: ComponentFixture<CardTodayHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTodayHighlightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTodayHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
