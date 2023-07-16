import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = '3ff4084d29545f740ab3c2c93d30fbe5'; // Replace with your Movie Database API key

  constructor(private http: HttpClient) { }

  searchMovies(query: string) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${query}`;

    return this.http.get(url);
  }
}
