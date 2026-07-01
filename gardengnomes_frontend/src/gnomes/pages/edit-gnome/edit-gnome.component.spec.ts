import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGnomeComponent } from './edit-gnome.component';

describe('EditGnomeComponent', () => {
  let component: EditGnomeComponent;
  let fixture: ComponentFixture<EditGnomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditGnomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditGnomeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
