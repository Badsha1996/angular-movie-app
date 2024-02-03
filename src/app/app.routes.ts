import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { MoviesComponent } from './Pages/movies/movies.component';
import { TvShowsComponent } from './Pages/tv-shows/tv-shows.component';

export const routes: Routes = [
    {
        path: "",
        component : HomeComponent
    },
    {
        path: "movies",
        component : MoviesComponent
    },
    {
        path: "tvshows",
        component: TvShowsComponent
    }
];
