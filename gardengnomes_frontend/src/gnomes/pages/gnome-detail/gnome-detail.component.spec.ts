import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GnomeDetailComponent } from './gnome-detail.component';

describe('GnomeDetailComponent', () => {
  let component: GnomeDetailComponent;
  let fixture: ComponentFixture<GnomeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GnomeDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GnomeDetailComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
