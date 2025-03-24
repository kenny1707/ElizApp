import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratosListPageComponent } from './contratos-list-page.component';

describe('ContratosListPageComponent', () => {
  let component: ContratosListPageComponent;
  let fixture: ComponentFixture<ContratosListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContratosListPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContratosListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
