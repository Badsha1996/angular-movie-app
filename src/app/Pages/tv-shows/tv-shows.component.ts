import { Component } from '@angular/core';
import { FooterComponent } from "../../Components/footer/footer.component";
import { TvDataService } from '../../Service/tv-data.service';
import { delay } from 'rxjs';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-tv-shows',
    standalone: true,
    templateUrl: './tv-shows.component.html',
    styleUrl: './tv-shows.component.css',
    imports: [FooterComponent,FormsModule, NgOptimizedImage,]
})
export class TvShowsComponent {
    searchRes : string | null | any = null
    searchString : string | null = null
    loader: boolean = true;
  
  
    constructor(private tvShowService : TvDataService){}
    searchTvShows(){
      this.tvShowService.seachTvShows(this.searchString).pipe(delay(2000)).subscribe({next: (res : any) =>{this.searchRes = res.results, this.loader = false;}, error : (err)=>{console.log(err)}})
    }
}
