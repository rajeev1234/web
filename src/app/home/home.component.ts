import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { User } from '../user';
import { Router } from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import { MovieService } from '../movie.service';
import {UserService} from '../user.service';
import { Movie } from '../movie';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MovieService]

})
export class HomeComponent implements OnInit {
   account: User = new User();
   userSub: Subscription;
   movies;
   selectedMovie: Movie;
   isEdit: boolean;
   movieInput: FormGroup;
   isAddEditMode: boolean;

  constructor(private global: GlobalService,
              private router: Router,
              private movieService: MovieService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.userSub = this.global.user.subscribe(
      me => this.account = me
    );
     if ( localStorage.getItem('token') && localStorage.getItem('username3')) {
      this.global.me = JSON.parse(localStorage.getItem('account'));
      this.getMovies();
    } else {
      this.router.navigate(['/login']);
    }
    this.isAddEditMode = false;
    this.isEdit = false;
    this.movieInput = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
    getMovies() {
    this.movieService.getMovies().subscribe(
      response => {
        this.movies = response;
        // console.log(this.getMovies());
      },
      error => {
        console.log('error', error);
      }
    );
  }
  postMovies() {
    this.movieService.postMovies(this.selectedMovie).subscribe(
         responce => {
        alert('User' + 'has been created');
      },
      error => console.log('error', error )
    );
  }
  movieClicked(movie: Movie) {
    this.selectedMovie = movie;
    this.isAddEditMode = false;
  }
  addMovieClicked() {
    this.isEdit = false;
    this.isAddEditMode = true;
    this.selectedMovie = null;
    this.movieInput.reset();
  }
   logoutClicked() {
    this.global.me = new User();
    localStorage.removeItem('token');
    localStorage.removeItem('account');
    this.router.navigate(['/login']);
  }

}
