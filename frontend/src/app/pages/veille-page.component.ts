import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { veilleData } from '../data/portfolio.data';

@Component({
  selector: 'app-veille-page',
  standalone: true,
  imports: [NgFor],
  template: `

    <section class="section panel">
      <h1>{{ data.introTitle }}</h1>
      <p>{{ data.introText }}</p>
    </section>

    <section class="section panel">
      <h1>Voici les outils de veille technologique que j'utilise</h1>
      <div class="article-grid">
        <article class="article-item" *ngFor="let item of data.tools">
          <div class="article-card">
            <h3>{{ item.title }}</h3>
            <p><strong>Type :</strong> {{ item.type }}</p>
            <p>{{ item.text }}</p>
            <a [href]="item.link" target="_blank" rel="noreferrer">Voir le site</a>
          </div>
        </article>
      </div>
    </section>
  `
})
export class VeillePageComponent {
  readonly data = veilleData;
}