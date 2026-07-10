import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface MenuItem {
  label: string;
  route: string;
  icon?: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    NgFor,
    NgIf
  ],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  collapsed = false;

  menuItems: MenuItem[] = [
    {
      label: 'Users',
      route: '/users',
      icon: '👥',
    },
    {
      label: 'Gnomes',
      route: '/gnomes',
      icon: '🧙',
    },
    {
      label: 'Feed Events',
      route: '/feed-events',
      icon: '📰',
    },
  ];

  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }
}