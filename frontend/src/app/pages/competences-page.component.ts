import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { competencesData } from '../data/portfolio.data';
import { competencese5Data } from '../data/portfolio.data';

@Component({
  selector: 'app-competences-page',
  standalone: true,
  imports: [NgFor, NgIf],
  template: `

    <section class="section panel">
      <h1>{{ data.title }}</h1>
      <p>{{ data.text }}</p>
      <div class="competences-grid">
        <article class="skill-card" *ngFor="let skill of data.skills" (click)="openModal(skill.icon)" style="cursor: pointer;">
          <img [src]="skill.icon" [alt]="skill.label" class="competence-icon" />
          <h3>{{ skill.label }}</h3>
        </article>
      </div>
    </section>

    <section class="section panel">
      <h1>{{ competencese5Data.title }}</h1>
      <p>{{ competencese5Data.text }}</p>
      <div class="competences-grid">
        <ng-container *ngFor="let skill of competencese5Data.skills">
          <article class="e5-card" *ngIf="skill.icon" (click)="openModal(skill.icon)" style="cursor: pointer;">
            <img [src]="skill.icon" [alt]="skill.label" class="competence-icon" />
            <h3>{{ skill.label }}</h3>
          </article>
        </ng-container>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <div class="modal-overlay" *ngIf="selectedImage" (click)="closeModal()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <button class="modal-close" (click)="closeModal()">&times;</button>
        <img [src]="selectedImage" alt="Image agrandie" class="modal-image" />
      </div>
    </div>
  `,
  styles: [`
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }

    .modal-content {
      position: relative;
      max-width: 90vw;
      max-height: 90vh;
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }

    .modal-image {
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
    }

    .modal-close {
      position: absolute;
      top: 10px;
      right: 10px;
      background: rgba(0, 0, 0, 0.6);
      color: white;
      border: none;
      font-size: 28px;
      cursor: pointer;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1001;
      transition: background 0.2s;
    }

    .modal-close:hover {
      background: rgba(0, 0, 0, 0.9);
    }

    .skill-card, .e5-card {
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .skill-card:hover, .e5-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
  `]
})
export class CompetencesPageComponent {
  readonly data = competencesData;
  readonly competencese5Data = competencese5Data;
  selectedImage: string | null = null;

  openModal(imageSrc: string | undefined) {
    if (imageSrc) {
      this.selectedImage = imageSrc;
    }
  }

  closeModal() {
    this.selectedImage = null;
  }
}