import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieDataService } from '../../Service/movie-data.service';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent implements OnInit {
  public id: any
  video: boolean = false; 
  movie:any
  baseVideoUrl = ''
  autoplay = ''
  relatedVideo:any 
  casts:any = []
  backdrops = []
  recomandation = []


  constructor(
    private router: ActivatedRoute,
    private movieService: MovieDataService
  ) {}
  ngOnInit(): void {
    this.router.params.subscribe((param: Params) => {
      this.id = param['id'];
    });
    this.getMovieDeatils(this.id)
  }

  getMovieDeatils(id:number){
    this.movieService.getMovie(id).subscribe((res)=>{
      this.movie = res
    })
  }
}
