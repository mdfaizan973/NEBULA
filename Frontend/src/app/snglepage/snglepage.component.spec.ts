import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnglepageComponent } from './snglepage.component';

describe('SnglepageComponent', () => {
  let component: SnglepageComponent;
  let fixture: ComponentFixture<SnglepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SnglepageComponent]
    });
    fixture = TestBed.createComponent(SnglepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
