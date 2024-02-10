import { Component } from '@angular/core';
import { FooterComponent } from "../../Components/footer/footer.component";
import { MovieDataService } from '../../Service/movie-data.service';
import { FormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import { delay } from 'rxjs';
import { SkeletonComponent } from "../../Components/skeleton/skeleton.component";

@Component({
    selector: 'app-movies',
    standalone: true,
    templateUrl: './movies.component.html',
    styleUrl: './movies.component.css',
    imports: [FooterComponent, FormsModule, NgOptimizedImage, SkeletonComponent]
})
export class MoviesComponent {

  searchRes : string | null | any = null
  searchString : string | null = null
  loader: boolean = true;


  constructor(private movieService : MovieDataService){}
  searchMovies(){
    this.movieService.seachMovies(this.searchString).pipe(delay(2000)).subscribe({next: (res : any) =>{this.searchRes = res.results, this.loader = false;}, error : (err)=>{console.log(err)}})
  }

}
