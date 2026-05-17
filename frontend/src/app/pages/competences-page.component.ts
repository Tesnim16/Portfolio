import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { competencesData } from '../data/portfolio.data';
import { competencese5Data } from '../data/portfolio.data';

@Component({
  selector: 'app-competences-page',
  standalone: true,
  imports: [NgFor],
  template: `

    <section class="section panel">
      <h1>{{ data.title }}</h1>
      <p>{{ data.text }}</p>
      <div class="competences-grid">
        <article class="skill-card" *ngFor="let skill of data.skills">
          <img [src]="skill.icon" [alt]="skill.label" class="competence-icon" />
          <h3>{{ skill.label }}</h3>
        </article>
      </div>
    </section>

    <section class="section panel">
      <h1>{{ competencese5Data.title }}</h1>
      <p>{{ competencese5Data.text }}</p>
      <div class="competences-grid">
        <article class="e5-card" *ngFor="let skill of competencese5Data.skills">
          <img *ngIf="skill.icon" [src]="skill.icon" [alt]="skill.label" class="competence-icon" />
          <h3>{{ skill.label }}</h3>
        </article>
      </div>
    </section>
  `
})
export class CompetencesPageComponent {
  readonly data = competencesData;
  readonly competencese5Data = competencese5Data;
}