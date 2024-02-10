import { Component } from '@angular/core';
import { FooterComponent } from "../../Components/footer/footer.component";
import { MovieDataService } from '../../Service/movie-data.service';
import { FormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-movies',
    standalone: true,
    templateUrl: './movies.component.html',
    styleUrl: './movies.component.css',
    imports: [FooterComponent, FormsModule, NgOptimizedImage]
})
export class MoviesComponent {

  searchRes : string | null | any = null
  searchString : string | null = null

  constructor(private movieService : MovieDataService){}
  searchMovies(){
    this.movieService.seachMovies(this.searchString).subscribe({next: (res : any) =>{this.searchRes = res.results}, error : (err)=>{console.log(err)}})
  }

}
