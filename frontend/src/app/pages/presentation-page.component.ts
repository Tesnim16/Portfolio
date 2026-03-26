import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { presentationData } from '../data/portfolio.data';

@Component({
  selector: 'app-presentation-page',
  standalone: true,
  imports: [NgFor],
  template: `
    <section class="section hero">
      <h1>{{ data.title }}</h1>
      <p>{{ data.subtitle }}</p>
    </section>

    <section class="section panel parcours">
      <div class="timeline">
        <article class="timeline-item" *ngFor="let item of data.timeline" [class.left]="item.side === 'left'" [class.right]="item.side === 'right'">
          <span class="timeline-dot"></span>
          <h3>{{ item.years }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>

  <section class="section panel parcours">
    <div class="timeline">
      <article class="timeline-item" *ngFor="let item of data.timelinestage" [class.left]="item.side === 'left'" [class.right]="item.side === 'right'">
        <span class="timeline-dot"></span>
        <h3>{{ item.years }}</h3>
        <p>{{ item.text }}</p>
      </article>
    </div>
  </section>

    <section class="section panel">
      <h1>Mon CV</h1>
      <p>{{ data.cvText }}</p>
      <img [src]="data.cvImage" alt="Mon CV" class="cv-image" />
      <p>Vous pouvez télécharger mon CV en cliquant sur le lien ci-dessous :</p>
      <a class="button-link" [href]="data.cvPdf" target="_blank" rel="noreferrer">Télécharger mon CV</a>
    </section>
  `
})
export class PresentationPageComponent {
  readonly data = presentationData;
}