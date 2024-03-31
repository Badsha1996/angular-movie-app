import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../Components/footer/footer.component';
import { MovieDataService } from '../../Service/movie-data.service';
import { FormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import { delay } from 'rxjs';
import { SkeletonComponent } from '../../Components/skeleton/skeleton.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movies',
  standalone: true,
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
  imports: [FooterComponent, FormsModule, NgOptimizedImage, SkeletonComponent,RouterModule],
})
export class MoviesComponent implements OnInit {
  searchRes: string | null | any = null;
  searchString: string | null = null;
  loader: boolean = true;

  constructor(private movieService: MovieDataService) {}
  ngOnInit(): void {
    this.getTopRatedMovies(1);
  }
  searchMovies() {
    this.loader = true;
    this.movieService
      .seachMovies(this.searchString)
      .pipe(delay(2000))
      .subscribe({
        next: (res: any) => {
          (this.searchRes = res.results), (this.loader = false);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  getTopRatedMovies(page: number) {
    this.movieService
      .getTopRatedMovies(page)
      .pipe(delay(2000))
      .subscribe({
        next: (res: any) => {
          (this.searchRes = res.results), (this.loader = false);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  playNow() {}
}
