import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApisService } from '../../apis.service';
import { CommonModule } from '@angular/common';
import { SearchFilterComponent } from '../../component/search-filter/search-filter.component';


// interface resultList{
//   results: string
 

// }

export enum SearchType {
  movie = 'movie',
  tvshow = 'tvshow',
  person = 'person'
}



@Component({
  selector: 'app-searchlist-page',
  standalone: true,
  imports: [RouterModule, CommonModule, SearchFilterComponent],
  templateUrl: './searchlist-page.component.html',
  styleUrl: './searchlist-page.component.scss'
})
export class SearchlistPageComponent implements OnInit {
  route : ActivatedRoute = inject(ActivatedRoute)
  // homeComponentId = 1
  
  text: string = ''
  // lastValue: any;
  movieResults: any
  tvResults: any
  personResults: any
  errorMessage : string = ''


 
  searchType :typeof SearchType = SearchType
  activeButton : SearchType = SearchType.movie
  response : string = ''
  type : string = ''

 
  


  constructor(private readonly apiService : ApisService){



  }
  



ngOnInit(): void {

  



this.route.queryParamMap.subscribe(params =>{
    this.text = params.get('q') || ''

  })

  // console.log(this.text)
  if(this.text){
     this.apiService.fetchSearchedMovie(this.text).then((response) =>{
      this.movieResults = response;
      console.log(this.movieResults)

     }).catch((error)=>{
      this.errorMessage = error.message
      this.movieResults = []
     })

    
  }
  if(this.text){
     this.apiService.fetchSearchedTv(this.text).then((response) =>{
      this.tvResults = response;
      console.log(this.tvResults)

     }).catch((error)=>{
      this.errorMessage = error.message
      this.tvResults = []
     })

    
  }
  if(this.text){
     this.apiService.fetchSearchedPerson(this.text).then((response) =>{
      this.personResults = response;
      console.log(this.personResults)

     }).catch((error)=>{
      this.errorMessage = error.message
      this.personResults = []
     })

    
  }
  
 
}

results(text : SearchType){

  this.activeButton = text

 }
tvResult(text : SearchType){

  this.activeButton = text
  
 }


}
