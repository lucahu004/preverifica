import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaglietteComponent } from './magliette.component';

describe('MaglietteComponent', () => {
  let component: MaglietteComponent;
  let fixture: ComponentFixture<MaglietteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaglietteComponent]
    });
    fixture = TestBed.createComponent(MaglietteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
