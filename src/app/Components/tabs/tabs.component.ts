import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MovieDataService } from '../../Service/movie-data.service';
import { TvDataService } from '../../Service/tv-data.service';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent implements OnInit{
  tabLabel:string = 'Movies'

  tabChange(tabName:string){
    this.tabLabel = tabName
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
