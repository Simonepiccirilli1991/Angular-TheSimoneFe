import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDatiComponent } from './display-dati.component';

describe('DisplayDatiComponent', () => {
  let component: DisplayDatiComponent;
  let fixture: ComponentFixture<DisplayDatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDatiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
