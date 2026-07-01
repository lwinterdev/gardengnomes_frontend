import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { GnomeService } from '../../gnome.service';
import { UpdateGnomeRequest } from '../../dto/update-gnome-request';
import { Gnome } from '../../models/gnome.model';

@Component({
  selector: 'app-edit-gnome',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-gnome.component.html',
  styleUrl: './edit-gnome.component.css'
})
export class EditGnomeComponent implements OnInit {

  id = '';

  username = '';
  displayName = '';

  loading = false;
  error = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly gnomeService: GnomeService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || '';

    if (!this.id) {
      this.error = 'Invalid gnome id';
      return;
    }

    this.loadGnome();
  }

  loadGnome() {
    this.loading = true;

    this.gnomeService.getById(this.id).subscribe({
      next: (gnome: Gnome) => {
        this.username = gnome.username;
        this.displayName = gnome.displayName;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load gnome';
        this.loading = false;
        console.error(err);
      }
    });
  }

  updateGnome() {

    this.loading = true;
    this.error = '';

    const request: UpdateGnomeRequest = {
      username: this.username,
      displayName: this.displayName
    };

    this.gnomeService.update(this.id, request).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/gnomes', this.id]);
      },
      error: (err) => {
        this.loading = false;
        this.error = 'Failed to update gnome';
        console.error(err);
      }
    });
  }
}