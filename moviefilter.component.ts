import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-moviefilter',
  templateUrl: './moviefilter.component.html',
  styleUrls: ['./moviefilter.component.css']
})
export class MoviefilterComponent {
  @Input()all:number=0
  @Input()action:number=0;
 @Input()thriller:number=0;
@Input()horror:number=0;
 @Input() drama:number=0;
  @Input()adventure:number=0;
  @Input()fantasy:number=0;
 @Input()sciencefiction:number=0;
 @Input()anime:number=0;
 @Input()warmovies:number=0;

 radioButtonChanger:string="all";
@Output()
 filterradioButtonChanged:EventEmitter<string>= new EventEmitter<string>();

 onradioButtonChanged()
 {
  this.filterradioButtonChanged.emit(this.radioButtonChanger);
 }







}
