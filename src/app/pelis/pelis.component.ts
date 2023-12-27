import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-pelis',
  templateUrl: './pelis.component.html',
  styleUrl: './pelis.component.css'
})
export class PelisComponent implements OnInit {
  popularMovies: any[] = [];

  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
    this.tmdbService.getPopularMovies().subscribe((data) => {
      this.popularMovies = data.results;
    });
  }
}
