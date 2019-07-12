import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import {Movie} from '../../model/Movie'
// import { ApiService } from '../../api.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {
  @Input() movies =[];
  @Output() selectMovie = new EventEmitter<Movie>();
  @Output() editedMovie = new EventEmitter<Movie>();
  @Output() createNewMovie = new EventEmitter<Movie>();
  @Output() deletedMovie = new EventEmitter<Movie>();

  
  constructor() { }

  ngOnInit() {
   
    
  }
  movieClicked(movie){
    this.selectMovie.emit(movie);
  }
  editMovie(movie){
    this.editedMovie.emit(movie);
  }
  newMovie(){
    this.createNewMovie.emit();
  }
  deleteMovie(movie:Movie){
    this.deletedMovie.emit(movie);
  
}
}
