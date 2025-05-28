import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostEstimatorComponent } from './cost-estimator.component';

describe('CostEstimatorComponent', () => {
  let component: CostEstimatorComponent;
  let fixture: ComponentFixture<CostEstimatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostEstimatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostEstimatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
