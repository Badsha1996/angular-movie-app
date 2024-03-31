import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'movies',
    loadComponent: () =>
      import('./Pages/movies/movies.component').then((m) => m.MoviesComponent),
  },
  {
    path: 'tvshows',
    loadComponent: () =>
      import('./Pages/tv-shows/tv-shows.component').then(
        (m) => m.TvShowsComponent
      ),
  },
  {
    path: 'movies/:id',
    loadComponent: () =>
      import('./Pages/movie-details/movie-details.component').then(
        (m) => m.MovieDetailsComponent
      ),
  },
];
