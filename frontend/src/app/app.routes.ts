import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { EmploymentPageComponent } from './pages/employment-page/employment-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
export const routes: Routes = [
    {path: 'login', component: LoginPageComponent},
    {path: 'aboutme', component: AboutMePageComponent},
    {path: 'contact', component: ContactPageComponent},
    {path: 'employment', component: EmploymentPageComponent},
    {path: 'projects', component: ProjectsPageComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full' }

];
