import { Component } from '@angular/core';
import { e5Data } from '../data/portfolio.data';

@Component({
  selector: 'app-e5-page',
  standalone: true,
  template: `
    <section class="section hero">
      <h1>{{ data.title }}</h1>
      <p>{{ data.subtitle }}</p>
    </section>

    <section class="section panel">
      <h1>Tableau de synthèse des compétences</h1>
      <p>{{ data.text }}</p>
    </section>

    <section class="section panel">
      <h1>Mon Tableau de synthèse</h1>
      <p>{{ data.tableText }}</p>
      <img [src]="data.tableImage" alt="Tableau de synthèse" class="tableau-image" />
      <p>Vous pouvez télécharger mon Tableau de synthèse en cliquant sur le lien ci-dessous :</p>
      <a class="button-link" [href]="data.tablePdf" target="_blank" rel="noreferrer">Télécharger mon Tableau de synthèse</a>
    </section>
  `
})
export class E5PageComponent {
  readonly data = e5Data;
}