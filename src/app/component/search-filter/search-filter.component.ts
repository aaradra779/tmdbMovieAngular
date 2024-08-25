import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ApisService } from '../../apis.service';
import { ActivatedRoute, RouterModule } from '@angular/router';





export enum SearchType {
  movie = 'movie',
  tvshow = 'tvshow',
  person = 'person'
}




@Component({
  selector: 'app-search-filter',
  standalone: true,
  imports: [RouterModule,  CommonModule],
  templateUrl: './search-filter.component.html',
  styleUrl: './search-filter.component.scss'
})
export class SearchFilterComponent implements OnInit {
  route : ActivatedRoute = inject(ActivatedRoute)
  searchType :typeof SearchType = SearchType
  activeButton : SearchType = SearchType.movie
  response : string = ''
  text : string = ''
  type : string = ''


  constructor(private apiService : ApisService){

  }

  ngOnInit(): void {
    // this.results(this.searchType.movie)
    // this.route.queryParamMap.subscribe(params =>{
    //   this.text = params.get('q') || ''
    
    // })
  }





  results(text : SearchType){

    this.activeButton = text

   }
  tvResult(text : SearchType){

    this.activeButton = text
    
   }

}
