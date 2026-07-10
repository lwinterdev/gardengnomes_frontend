
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  // optional: future hook for public feed preview
  trendingGnomes = [
    { name: 'Forest Guardian', likes: 120 },
    { name: 'Stone Wizard', likes: 98 },
    { name: 'Moss Knight', likes: 76 }
  ];

}