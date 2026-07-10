import { Component, OnInit } from '@angular/core';
import { DatePipe} from '@angular/common';
import { RouterLink } from '@angular/router';

import { GnomeService } from '../../gnome.service';
import { Gnome } from '../../models/gnome.model';

@Component({
  selector: 'app-gnome-list',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './gnome-list.component.html',
  styleUrl: './gnome-list.component.css'
})
export class GnomeListComponent implements OnInit {

  gnomes: Gnome[] = [];
  loading = false;
  error = '';
  page = 1;
  size = 10;
  sort = "";
  search = "";

  constructor(private readonly gnomeService: GnomeService) {}

  ngOnInit() {
    this.loadGnomes();
  }

  loadGnomes() {
    this.loading = true;
    this.error = '';

    this.gnomeService.getAll(this.page, this.size , this.sort , this.search).subscribe({
      next: (data) => {
        this.gnomes = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load gnomes';
        this.loading = false;
        console.error(err);
      }
    });
  }

  deleteGnome(id: string) {
    if (!confirm('Are you sure you want to delete this gnome?')) {
      return;
    }

    this.gnomeService.delete(id).subscribe({
      next: () => {
        this.gnomes = this.gnomes.filter(g => g.id !== id);
      },
      error: (err) => {
        this.error = 'Failed to delete gnome';
        console.error(err);
      }
    });
  }
}