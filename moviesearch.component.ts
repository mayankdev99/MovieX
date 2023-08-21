import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-moviesearch',
  templateUrl: './moviesearch.component.html',
  styleUrls: ['./moviesearch.component.css']
})
export class MoviesearchComponent {

  movieSearchValue:string=" ";
  @Output()
  onMovieSearchChanged:EventEmitter<string>= new EventEmitter<string>();

  onSearchChanged()
  {
    this.onMovieSearchChanged.emit(this.movieSearchValue);
  }



}
