import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';




export enum SearchType {
  movie = 'movie',
  tvshow = 'tvshow',
  person = 'person'
}




@Component({
  selector: 'app-search-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-filter.component.html',
  styleUrl: './search-filter.component.scss'
})
export class SearchFilterComponent implements OnInit {

  searchType :typeof SearchType = SearchType
  activeButton : SearchType = SearchType.movie

  ngOnInit(): void {
    this.results(this.searchType.movie)
  }



  results(text : SearchType){
    this.activeButton = text

  }

}
