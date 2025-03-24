import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationListPageComponent } from './vacation-list-page.component';

describe('VacationListPageComponent', () => {
  let component: VacationListPageComponent;
  let fixture: ComponentFixture<VacationListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VacationListPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacationListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
