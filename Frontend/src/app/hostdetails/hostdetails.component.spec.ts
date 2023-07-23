import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostdetailsComponent } from './hostdetails.component';

describe('HostdetailsComponent', () => {
  let component: HostdetailsComponent;
  let fixture: ComponentFixture<HostdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HostdetailsComponent]
    });
    fixture = TestBed.createComponent(HostdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
