import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../Components/footer/footer.component';
import { TvDataService } from '../../Service/tv-data.service';
import { delay } from 'rxjs';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SkeletonComponent } from '../../Components/skeleton/skeleton.component';

@Component({
  selector: 'app-tv-shows',
  standalone: true,
  templateUrl: './tv-shows.component.html',
  styleUrl: './tv-shows.component.css',
  imports: [FooterComponent, FormsModule, NgOptimizedImage, SkeletonComponent],
})
export class TvShowsComponent implements OnInit {
  searchRes: string | null | any = null;
  searchString: string | null = null;
  loader: boolean = true;

  constructor(private tvShowService: TvDataService) {}
  ngOnInit(): void {
    this.getTopRatedTvShows(1);
  }
  searchTvShows() {
    this.loader = true
    this.tvShowService
      .seachTvShows(this.searchString)
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

  getTopRatedTvShows(page: number) {
    this.tvShowService
      .getTopRatedTvShows(page)
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
}
