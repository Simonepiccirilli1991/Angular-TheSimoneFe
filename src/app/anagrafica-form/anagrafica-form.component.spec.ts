import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnagraficaFormComponent } from './anagrafica-form.component';

describe('AnagraficaFormComponent', () => {
  let component: AnagraficaFormComponent;
  let fixture: ComponentFixture<AnagraficaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnagraficaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnagraficaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
