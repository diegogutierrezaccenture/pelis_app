import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-pelis',
  templateUrl: './pelis.component.html',
  styleUrl: './pelis.component.css',
})
export class PelisComponent implements OnInit {
  popularMovies: any[] = [];
  moviesDetails: any[] = [];
  searchQuery: string = '';
  searchResults: any[] = [];

  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
    this.tmdbService.getPopularMovies().subscribe((data) => {
      this.popularMovies = data.results;
    });
  }

  search(): void {
    this.tmdbService.searchMovies(this.searchQuery).subscribe((data) => {
      this.searchResults = data.results;
    });
  }

  getMoviesByGenre(genreId: number): void {
    this.tmdbService.getMoviesByGenre(genreId).subscribe((data) => {
      // Manejar las películas por género
    });
  }
}
