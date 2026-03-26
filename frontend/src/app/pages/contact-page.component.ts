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
      <h1>Restons en contact</h1>
      <p>Une question, une opportunité ou une suggestion ? Je serais ravi de vous entendre. Envoyez-moi un message et je vous répondrai dans les meilleurs délais.</p>
    </section>

    <section class="section panel contact-panel">
      <div class="contact-wrapper">
        <div class="contact-info">
          <h2>Communiquer avec moi</h2>
          <div class="info-items">
            <div class="info-item">
              <span class="info-icon">✉️</span>
              <div>
                <h4>Email</h4>
                <p>Pour toute demande, n'hésitez pas à m'envoyer un email</p>
                <a class="contact-link" href="mailto:tesnim.benama@limayrac.fr">tesnim.benama@limayrac.fr</a>
              </div>
            </div>
            <div class="info-item">
              <span class="info-icon">⚡</span>
              <div>
                <h4>Réponse rapide</h4>
                <p>Je réponds généralement en 24-48 heures</p>
              </div>
            </div>
            <div class="info-item">
              <span class="info-icon">🤝</span>
              <div>
                <h4>Ouvert à l'échange</h4>
                <p>Collaborations, projets, conseils... Je suis intéressé !</p>
              </div>
            </div>
            <div class="info-item">
              <span class="info-icon">👜</span>
              <div>
                <h4>Statut</h4>
                <p>En recherche d'alternance</p>
              </div>
            </div>
          </div>
        </div>

        <form class="contact-form" [formGroup]="contactForm" (ngSubmit)="submit()">
          <div class="form-group">
            <label for="name">Votre nom</label>
            <input 
              id="name" 
              formControlName="name" 
              type="text" 
              placeholder="Jean Dupont"
              required />
            <span class="error" *ngIf="contactForm.get('name')?.invalid && contactForm.get('name')?.touched">
              Le nom est requis
            </span>
          </div>

          <div class="form-group">
            <label for="email">Votre email</label>
            <input 
              id="email" 
              formControlName="email" 
              type="email" 
              placeholder="jean.dupont@exemple.com"
              required />
            <span class="error" *ngIf="contactForm.get('email')?.invalid && contactForm.get('email')?.touched">
              {{ contactForm.get('email')?.errors?.['required'] ? "L'email est requis" : "Format d'email invalide" }}
            </span>
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea 
              id="message" 
              formControlName="message" 
              rows="5"
              placeholder="Decrivez votre question ou proposition..."
              required></textarea>
            <span class="error" *ngIf="contactForm.get('message')?.invalid && contactForm.get('message')?.touched">
              Le message est requis
            </span>
            <span class="char-count">{{ contactForm.get('message')?.value?.length || 0 }}/1000</span>
          </div>

          <button type="submit" class="submit-btn" [disabled]="loading || contactForm.invalid">
            <span class="btn-icon">{{ loading ? '...' : '✓' }}</span>
            <span class="btn-text">{{ loading ? 'Envoi en cours...' : 'Envoyer mon message' }}</span>
          </button>

          <div class="status-message" *ngIf="success">
            <span class="status-icon">✓</span>
            <div>
              <strong>Message envoyé avec succès !</strong>
              <p>Merci pour votre message. Je vous répondrai dès que possible.</p>
            </div>
          </div>
          <div class="status-message error" *ngIf="error">
            <span class="status-icon">⚠️</span>
            <div>
              <strong>Une erreur est survenue</strong>
              <p>Veuillez vérifier votre connexion et réessayer.</p>
            </div>
          </div>
        </form>
      </div>
    </section>
  `,
  styles: [`
    :host ::ng-deep .contact-panel {
      padding: 60px 28px !important;
    }
  `]
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