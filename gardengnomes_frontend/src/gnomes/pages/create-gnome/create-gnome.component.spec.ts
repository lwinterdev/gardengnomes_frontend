import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGnomeComponent } from './create-gnome.component';

describe('CreateGnomeComponent', () => {
  let component: CreateGnomeComponent;
  let fixture: ComponentFixture<CreateGnomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGnomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateGnomeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
