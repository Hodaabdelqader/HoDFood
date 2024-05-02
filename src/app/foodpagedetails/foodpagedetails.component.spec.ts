import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodpagedetailsComponent } from './foodpagedetails.component';

describe('FoodpagedetailsComponent', () => {
  let component: FoodpagedetailsComponent;
  let fixture: ComponentFixture<FoodpagedetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodpagedetailsComponent]
    });
    fixture = TestBed.createComponent(FoodpagedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
