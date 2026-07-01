import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GnomeCardComponent } from './gnome-card.component';

describe('GnomeCardComponent', () => {
  let component: GnomeCardComponent;
  let fixture: ComponentFixture<GnomeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GnomeCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GnomeCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
