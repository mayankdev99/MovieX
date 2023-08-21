import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieSectionComponent } from './movie-section/movie-section.component';
import { SeriesSectionComponent } from './series-section/series-section.component';
import { MoviefilterComponent } from './moviefilter/moviefilter.component';
import { MoviesearchComponent } from './moviesearch/moviesearch.component';
import { FormsModule } from '@angular/forms';
import { FilterSeriesComponent } from './filter-series/filter-series.component';
import { SeriesSearchComponent } from './series-search/series-search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import{Routes, RouterModule} from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatIconModule} from '@angular/material/icon';

const appRoute:Routes=[
      {path:'' ,redirectTo:'/Home', pathMatch:'full' },
      {path:'Home' , component:HomeComponent},
      {path:'Contact' , component:ContactComponent},
      {path:'Movie-Section', component:MovieSectionComponent},
      {path:'Series-Section', component:SeriesSectionComponent},
      {path:'**', component:ErrorComponent}



]

@NgModule({
  declarations: [
    AppComponent,
    MovieSectionComponent,
    SeriesSectionComponent,
    MoviefilterComponent,
    MoviesearchComponent,
    FilterSeriesComponent,
    SeriesSearchComponent,
    NavbarComponent,
    ContactComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
    BrowserAnimationsModule,
    MatIconModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
