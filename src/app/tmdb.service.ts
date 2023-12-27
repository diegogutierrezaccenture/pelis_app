import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  private apiKey = 'ca9ded467251d3f837b8cee8f403364d';

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<any> {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}`;
    return this.http.get(url);
  }
}
