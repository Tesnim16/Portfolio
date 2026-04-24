import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { projectsData } from '../data/portfolio.data';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [NgFor],
  template: `
    <section class="section hero">
      <h1>{{ data.title }}</h1>
      <p>{{ data.subtitle }}</p>
    </section>

    <section class="section panel">
      <div class="project-grid">
        <article class="project-item" *ngFor="let card of data.cards">
          <div class="project-card">
            <h3>{{ card.title }}</h3>
            <p><strong>Technologies :</strong> {{ card.stack }}</p>
            <p>{{ card.text }}</p>
            <a [href]="card.link" target="_blank" rel="noreferrer">Voir le projet</a>
          </div>
        </article>
      </div>
    </section>
  `
})
export class ProjectsPageComponent {
  readonly data = projectsData;
}