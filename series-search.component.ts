import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-series-search',
  templateUrl: './series-search.component.html',
  styleUrls: ['./series-search.component.css']
})
export class SeriesSearchComponent {

  
  movieSearchValueSeries:string=" ";
  @Output()
  onMovieSearchChangedSeries:EventEmitter<string>= new EventEmitter<string>();

  onSearchChangedSeries()
  {
    this.onMovieSearchChangedSeries.emit(this.movieSearchValueSeries);
  }

}
