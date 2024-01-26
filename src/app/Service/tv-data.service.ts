import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TvDataService {
  BASE_URL: string;
  API_KEY: string;
  LANGUAGE: string;
  REGION: string;
  constructor(private http: HttpClient) {
    this.BASE_URL = 'https://api.themoviedb.org/3/';
    this.API_KEY = 'c4b79773ab8dc5e79da8d439bf489192';
    this.LANGUAGE = 'en-US';
    this.REGION = 'US';
  }

  getTvOnAir(page : number){
    return this.http.get(`${this.BASE_URL}tv/on_the_air?api_key=${this.API_KEY}&page=${page}&language=${this.LANGUAGE}&region=${this.REGION}`)
  }
}


