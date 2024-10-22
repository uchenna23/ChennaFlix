import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TmdbMediaContentService } from '../../services/tmdb-media-content.service';
import { CommonModule } from '@angular/common'; 
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'full-stack-resume-movie-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule, GalleriaModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
  popularMovies: any[] = [];
  movieImages: any[] = [];

  images: any[] | undefined;

  constructor( private tmbdService: TmdbMediaContentService){}

  
  
  ngOnInit(){
    this.tmbdService.getPopularMovies().subscribe(
      (response) => {
        this.popularMovies = response.results;
        this.movieImages = this.tmbdService.mapMoviesToImages(this.popularMovies)
      },
      (error) => {
        console.log('Error fetching movies', error);
      }
    );
  }



}
