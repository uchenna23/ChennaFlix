import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';
import { TvShowsPageComponent } from './pages/tv-shows-page/tv-shows-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
export const routes: Routes = [
    {path: 'movies', component: MoviesPageComponent},
    {path: 'tvshows', component: TvShowsPageComponent},
    {path: 'settings', component: SettingsPageComponent},
    {path: 'home', component: HomePageComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full' }
];
