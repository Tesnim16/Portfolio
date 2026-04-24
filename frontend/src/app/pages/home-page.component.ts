import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { NgFor } from '@angular/common';
import { homeData } from '../data/portfolio.data';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NgFor],
  template: `
    <section class="section hero" #heroElement>
      <h1>{{ data.heroTitle }}</h1>
      <p>{{ data.heroText }}</p>
    </section>

    <section class="section panel">
      <h1>{{ data.btsTitle }}</h1>
      <p>{{ data.btsText }}</p>
      <div class="card-container">
        <article class="card" *ngFor="let option of data.options">
          <div class="card-inner">
            <h3>{{ option.title }}</h3>
            <p>{{ option.text }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="section panel">
      <h1>{{ data.aboutTitle }}</h1>
      <p>{{ data.aboutText }}</p>
    </section>
  `
})
export class HomePageComponent implements AfterViewInit, OnDestroy {
  readonly data = homeData;
  private readonly particleColors = [
    'rgba(56, 189, 248, 0.58)',
    'rgba(14, 165, 233, 0.52)',
    'rgba(125, 211, 252, 0.45)'
  ];

  @ViewChild('heroElement', { static: true }) heroElement!: ElementRef<HTMLElement>;

  private particleTimer?: ReturnType<typeof setInterval>;

  ngAfterViewInit(): void {
    this.particleTimer = setInterval(() => this.createParticle(), 250);
  }

  ngOnDestroy(): void {
    if (this.particleTimer) {
      clearInterval(this.particleTimer);
    }
  }

  private createParticle(): void {
    const hero = this.heroElement.nativeElement;
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.setProperty(
      '--particle-color',
      this.particleColors[Math.floor(Math.random() * this.particleColors.length)]
    );

    const size = 2 + Math.random() * 6;
    const duration = 10 + Math.random() * 10;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.setProperty('--particle-duration', `${duration}s`);

    hero.appendChild(particle);
    setTimeout(() => particle.remove(), 15000);
  }
}