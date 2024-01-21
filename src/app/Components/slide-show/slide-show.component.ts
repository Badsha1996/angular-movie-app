import { Component, OnInit } from '@angular/core';
import { MovieDataService } from '../../Service/movie-data.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-slide-show',
  standalone: true,
  imports: [],
  templateUrl: './slide-show.component.html',
  styleUrl: './slide-show.component.css',
})
export class SlideShowComponent implements OnInit {
  counter: number = 1;
  movieNowPlayingData: any = [];

  constructor(private movieService: MovieDataService) {}

  ngOnInit(): void {
    this.loadMovieNowPlaying(1);
    this.pageCounter();
  }

  // methods Emmision => estimed => 2sec set time for data emission 
  loadMovieNowPlaying(page: number) {
    this.movieService
      .getNowPlaying(page)
      .pipe(delay(2000))
      .subscribe({
        next: (movieNowPlayingData: any) =>
          (this.movieNowPlayingData = movieNowPlayingData?.results),
        error: (err) => console.log(err),
      });
  }

  pageCounter() {
    setInterval(() => {
      this.counter = ++this.counter % this.movieNowPlayingData.length;
      console.log(this.counter);
    }, 5000);
  }
}
