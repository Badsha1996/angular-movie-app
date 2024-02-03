import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MovieDataService } from '../../Service/movie-data.service';
import { TvDataService } from '../../Service/tv-data.service';
import { SkeletonComponent } from '../skeleton/skeleton.component';
import { delay } from 'rxjs';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, SkeletonComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css',
})
export class TabsComponent implements OnInit {
  tabLabel: string = 'Movies';
  loader: boolean = true;

  tabChange(tabName: string) {
    this.tabLabel = tabName;
  }

  trendingMovies: any = [];
  trendingTvShows: any = [];

  constructor(
    private movieService: MovieDataService,
    private tvService: TvDataService
  ) {}
  ngOnInit(): void {
    this.getTrendingMovies(1);
    this.getTrendingTvShows(1);
  }

  getTrendingMovies(page: number) {
    this.movieService.getNowPlaying(page).pipe(delay(2000)).subscribe({
      next: (movieNowPlayingData: any) => {
        this.trendingMovies = movieNowPlayingData?.results;
        this.loader = false;
      },
      error: (err) => console.log(err),
    });
  }

  getTrendingTvShows(page: number) {
    this.tvService.getTvOnAir(page).pipe(delay(2000)).subscribe({
      next: (tvOnAirData: any) => {
        this.trendingTvShows = tvOnAirData?.results;
        this.loader = false;
      },
      error: (err) => console.log(err),
    });
  }
}
