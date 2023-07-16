import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from './movie.model';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent {
  query!: string;
  movies!: Movie[];
  pagedMovies!: Movie[];
  currentPage = 1;
  itemsPerPage = 4;

  constructor(private movieService: MovieService) { }

  search() {
    this.movieService.searchMovies(this.query).subscribe((response: any) => {
      this.movies = response.results;
      this.currentPage = 1;
      this.updatePagedMovies();
    });
  }

  updatePagedMovies() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedMovies = this.movies.slice(startIndex, endIndex);
  }

  pageChanged(pageNumber: number) {
    this.currentPage = pageNumber;
    this.updatePagedMovies();
  }
}
