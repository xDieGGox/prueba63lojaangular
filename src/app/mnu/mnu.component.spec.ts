import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnuComponent } from './mnu.component';

describe('MnuComponent', () => {
  let component: MnuComponent;
  let fixture: ComponentFixture<MnuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MnuComponent]
    });
    fixture = TestBed.createComponent(MnuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
