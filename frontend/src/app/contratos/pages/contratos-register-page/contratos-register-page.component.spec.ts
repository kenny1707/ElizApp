import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratosRegisterPageComponent } from './contratos-register-page.component';

describe('ContratosRegisterPageComponent', () => {
  let component: ContratosRegisterPageComponent;
  let fixture: ComponentFixture<ContratosRegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContratosRegisterPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContratosRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
