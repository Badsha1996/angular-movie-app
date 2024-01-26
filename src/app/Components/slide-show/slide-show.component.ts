import { Component, OnInit } from '@angular/core';
import { MovieDataService } from '../../Service/movie-data.service';
import { delay } from 'rxjs';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-slide-show',
  standalone: true,
  imports: [],
  templateUrl: './slide-show.component.html',
  animations: [trigger('slider-fade', [
    transition('void => *', [style({ opacity: 0,backgroundColor : 'red' }), animate('1s', style({ opacity: 1,backgroundColor : 'yellow' }))]),
    transition('* => void', [style({ opacity: 1 }), animate('1s', style({ opacity: 0 }))]),
  ])]
})
export class SlideShowComponent implements OnInit {
  counter: number = 0;
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
    }, 5000);
  }
}
