import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { navItems, ownerName } from './data/portfolio.data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <header class="site-header">
      <nav class="site-nav">
        <ul>
          <li *ngFor="let item of navItems">
            <a [routerLink]="item.path" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: item.path === '/' }">{{ item.label }}</a>
          </li>
        </ul>
      </nav>
    </header>

    <main class="site-main">
      <router-outlet></router-outlet>
    </main>

    <footer class="site-footer">
      <p>&copy; {{ year }} {{ ownerName }}. Tous droits réservés.</p>
    </footer>
  `
})
export class AppComponent {
  readonly navItems = navItems;
  readonly ownerName = ownerName;
  readonly year = new Date().getFullYear();
}