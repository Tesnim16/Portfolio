import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  template: `
    <section class="section hero">
      <h1>Contact</h1>
      <p>Vous avez une question/opportunité ? Envoyez-moi un message !</p>
    </section>

    <section class="section panel contact-panel">
      <h1>Me contacter</h1>

      <form class="contact-form" [formGroup]="contactForm" (ngSubmit)="submit()">
        <label for="name">Nom</label>
        <input id="name" formControlName="name" type="text" required />

        <label for="email">Email</label>
        <input id="email" formControlName="email" type="email" required />

        <label for="message">Message</label>
        <textarea id="message" formControlName="message" rows="6" required></textarea>

        <button type="submit" [disabled]="loading || contactForm.invalid">
          {{ loading ? 'Envoi...' : 'Envoyer' }}
        </button>

        <p *ngIf="success" class="status success">Merci pour votre message ! Je vous répondrai dès que possible.</p>
        <p *ngIf="error" class="status error">Une erreur est survenue. Vérifiez le backend et la connexion MySQL.</p>
      </form>
    </section>
  `
})
export class ContactPageComponent {
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);

  readonly contactForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  success = false;
  error = false;
  loading = false;

  submit(): void {
    if (this.contactForm.invalid || this.loading) {
      return;
    }

    this.loading = true;
    this.success = false;
    this.error = false;

    this.http.post(`${environment.apiBaseUrl}/contact`, this.contactForm.getRawValue()).subscribe({
      next: () => {
        this.success = true;
        this.loading = false;
        this.contactForm.reset();
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }
}