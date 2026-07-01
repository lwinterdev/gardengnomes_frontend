import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { GnomeService } from '../../gnome.service';
import { CreateGnomeRequest } from '../../dto/create-gnome-request';

@Component({
  selector: 'app-create-gnome',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-gnome.component.html',
  styleUrl: './create-gnome.component.css'
})
export class CreateGnomeComponent {

  username = '';
  displayName = '';

  loading = false;
  error = '';

  constructor(
    private readonly gnomeService: GnomeService,
    private readonly router: Router
  ) {}

  createGnome() {

    this.loading = true;
    this.error = '';

    const request: CreateGnomeRequest = {
      username: this.username,
      displayName: this.displayName
    };

    this.gnomeService.create(request).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/gnomes']);
      },
      error: (err) => {
        this.loading = false;
        this.error = 'Failed to create gnome';
        console.error(err);
      }
    });
  }
}