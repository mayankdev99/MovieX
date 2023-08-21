import { Component } from '@angular/core';
import { Series } from './series';

@Component({
  selector: 'app-series-section',
  templateUrl: './series-section.component.html',
  styleUrls: ['./series-section.component.css']
})
export class SeriesSectionComponent {

  serieses:Series[]=[
    {name:"The Witcher", genere:"action", available:"yes", imagesource:"kkkk", rating:0, duration:"nnnnn",price:0 ,link:"abc"},
    {name: "The Last Kingdom", genere: "action", available: "yes", imagesource: "image1.jpg", rating: 4.5, duration: "2h 30m", price: 9.99,link:"dcf"},
{name: "Peaky Blinders", genere: "action", available: "yes", imagesource: "image2.jpg", rating: 3.8, duration: "1h 45m", price: 7.99, link:"xyz"},
{name: "Altered Carbon", genere: "action", available: "yes", imagesource: "image3.jpg", rating: 4.2, duration: "2h 15m", price: 8.49,link:"xcd"},
{name: "Black Mirror", genere: "sciencefiction", available: "yes", imagesource: "image4.jpg", rating: 4.7, duration: "2h 10m", price: 9.99, link:"pvc"},
{name: "Lost In Space", genere: "sciencefiction", available: "yes", imagesource: "image5.jpg", rating: 3.5, duration: "2h 5m", price: 7.99, link:"yds"},
{name: "The Umbrella Academy", genere: "sciencefiction", available: "yes", imagesource: "image6.jpg", rating: 4.0, duration: "1h 50m", price: 8.49, link:"bvc"},
{name: "Another Life", genere: "sciencefiction", available: "yes", imagesource: "image7.jpg", rating: 3.2, duration: "2h 20m", price: 7.99, link:"bfh"},
{name: "Midnight Mass", genere: "horror", available: "yes", imagesource: "image8.jpg", rating: 4.9, duration: "2h 30m", price: 9.99, link:"kjh"},
{name: "The Haunting of Hill House", genere: "horror", available: "yes", imagesource: "image9.jpg", rating: 4.3, duration: "2h 25m", price: 8.4, link:"hjd"},
{name: "The Haunting of Bly Manor", genere: "horror", available: "yes", imagesource: "image10.jpg", rating: 3.7, duration: "2h 15m", price: 7.99, link:"jhg"},
{name: "Devil In Ohio", genere: "horror", available: "yes", imagesource: "image11.jpg", rating: 4.6, duration: "2h 40m", price: 9.99,link:"jgfh"},
{name: "Pieces of Her", genere: "thriller", available: "yes", imagesource: "image12.jpg", rating: 3.9, duration: "2h 5m", price: 8.49, link:"ougij"},
{name: "The Night Agent", genere: "thriller", available: "yes", imagesource: "image13.jpg", rating: 4.2, duration: "2h 10m", price: 7.99, link:"jgkgj"},
{name: "The Diplomat", genere: "thriller", available: "yes", imagesource: "image14.jpg", rating: 4.8, duration: "2h 15m", price: 9.99, link:"kjj"},
{name: "Grey's Anatomy", genere: "drama", available: "yes", imagesource: "image15.jpg", rating: 3.6, duration: "1h 55m", price: 8.49, link:"jfkdj"},
{name: "The Sand Man", genere: "fantasy", available: "yes", imagesource: "image16.jpg", rating: 4.1, duration: "2h 25m", price: 7.99, link:"kfj"},
{name: "Shadow and Bone", genere: "fantasy", available: "yes", imagesource: "image17.jpg", rating: 3.5, duration: "2h 30m", price: 9.99, link:"lkfj"},
{name: "Five Came Back", genere: "war", available: "yes", imagesource: "image18.jpg", rating: 4.3, duration: "2h 20m", price: 8.49,link:"xfhgj"},
{name: "The Liberator", genere: "war", available: "yes", imagesource: "image19.jpg", rating: 4.0, duration: "1h 50m", price: 7.99, link:"ljjk"},
{name: "Human Playground", genere: "adventure", available: "yes", imagesource: "image20.jpg", rating: 3.8, duration: "2h 40m", price: 9.99, link:"jkdgj"},
{name: "castlevania", genere: "anime", available: "yes", imagesource: "image20.jpg", rating: 3.8, duration: "2h 40m", price: 9.99, link:"jkdgj"},
{name: "Full Metal Alchemist Brotherhood", genere: "yes", available: "South Africa", imagesource: "image20.jpg", rating: 3.8, duration: "2h 40m", price: 9.99, link:"jkdgj"}, 
]

  getAllSerieses():number
  {
     return this.serieses.length;
  }

  getAllActionSeries():number
  {
    return this.serieses.filter((series)=>{

      return series.genere==="action"
    }).length
  }

  getAllThrillerSeries():number
  {
    return this.serieses.filter((series)=>{

    return series.genere==="thriller"
    }).length
  }
  
  getAllHorrorSeries():number
  {
    return this.serieses.filter((series)=>{

      return series.genere==="horror"
    }).length
  }

  getAllDramaSeries():number
  {
    return this.serieses.filter((series)=>{

      return series.genere==="drama"
    }).length
  }

  getAllAdventureSeries():number
  {
    return this.serieses.filter((series)=>{

      return series.genere==="adventure"
    }).length
  }
  getAllFantasySeries():number
  {
    return this.serieses.filter((series)=>{

      return series.genere==="fantasy"
    }).length
  }

  getAllAnimeSeries():any
  {
    return this.serieses.filter((series)=>{

      return series.genere==="anime"
    }).length
  }
  getAllScienceFictionSeries():number
  {
    return this.serieses.filter((series)=>{

      return series.genere==="sciencefiction"
    }).length
  }

  getAllWarSeries():number
  {
    return this.serieses.filter((series)=>{

      return series.genere==="war"
    }).length
  }

  countRadioSeries:string="all";

  getCountSeries(data:string)
  {
    this.countRadioSeries=data;
  }

movieSearchSeries:string=" ";

getMovieSearchedSeries(searched:string)
{
   this.movieSearchSeries= searched;
}


  




}
