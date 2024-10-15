import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class TmdbMediaContentService {
  private apiUrl = environment.tmdbApiUrl + environment.tmdbApiKey;
  private imageBaseUrl = environment.tmbdImageUrl

  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}&language=en-US&page=1`);
  }

  mapMoviesToImages(movies: any[]): any[] {
    return movies.map((movie) => ({
      previewImageSrc: `${this.imageBaseUrl}${movie.poster_path}`,
      thumbnailImageSrc: `${this.imageBaseUrl}${movie.poster_path}`,
      alt: movie.title,
      title: movie.title,
    }));
  }
}
