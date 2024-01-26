import { Component, OnInit } from '@angular/core';
import { SlideShowComponent } from '../slide-show/slide-show.component';
import { FooterComponent } from '../footer/footer.component';
import { MovieDataService } from '../../Service/movie-data.service';
import { TvDataService } from '../../Service/tv-data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SlideShowComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
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
    this.movieService.getNowPlaying(page).subscribe({
      next: (movieNowPlayingData: any) =>
        (this.trendingMovies = movieNowPlayingData?.results),
      error: (err) => console.log(err),
    });
  }

  getTrendingTvShows(page: number) {
    this.tvService.getTvOnAir(page).subscribe({
      next: (tvOnAirData: any) => (this.trendingTvShows = tvOnAirData?.results),
      error: (err) => console.log(err),
    });
  }
}
