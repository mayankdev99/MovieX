import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-series',
  templateUrl: './filter-series.component.html',
  styleUrls: ['./filter-series.component.css']
})
export class FilterSeriesComponent {


  @Input()allS:number=0
  @Input()actionS:number=0;
 @Input()thrillerS:number=0;
@Input()horrorS:number=0;
 @Input() dramaS:number=0;
  @Input()adventureS:number=0;
  @Input()fantasyS:number=0;
 @Input()sciencefictionS:number=0;
 @Input()animeS:number=0;
 @Input()warmoviesS:number=0;

 radioButtonChangerSeries:string="all";
@Output()
 filterradioButtonChangedSeries:EventEmitter<string>= new EventEmitter<string>();

 onradioButtonChangedSeries()
 {
  this.filterradioButtonChangedSeries.emit(this.radioButtonChangerSeries);
 }




}
