import { Component } from '@angular/core';
import { MovieListComponent } from "../../components/movie-list/movie-list.component";


@Component({
  selector: 'full-stack-resume-user-profile-page',
  standalone: true,
  imports: [MovieListComponent],
  templateUrl: './user-profile-page.component.html',
  styleUrl: './user-profile-page.component.scss'
})
export class UserProfilePageComponent {


}
