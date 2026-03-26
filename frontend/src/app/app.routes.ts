import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page.component';
import { PresentationPageComponent } from './pages/presentation-page.component';
import { ProjectsPageComponent } from './pages/projects-page.component';
import { E5PageComponent } from './pages/e5-page.component';
import { CompetencesPageComponent } from './pages/competences-page.component';
import { VeillePageComponent } from './pages/veille-page.component';
import { ContactPageComponent } from './pages/contact-page.component';

export const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'presentation', component: PresentationPageComponent },
  { path: 'projet', component: ProjectsPageComponent },
  { path: 'e5', component: E5PageComponent },
  { path: 'competences', component: CompetencesPageComponent },
  { path: 'veille', component: VeillePageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '**', redirectTo: '' }
];