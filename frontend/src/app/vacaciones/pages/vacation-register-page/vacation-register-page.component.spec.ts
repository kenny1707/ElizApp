import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationRegisterPageComponent } from './vacation-register-page.component';

describe('VacationRegisterPageComponent', () => {
  let component: VacationRegisterPageComponent;
  let fixture: ComponentFixture<VacationRegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VacationRegisterPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacationRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
