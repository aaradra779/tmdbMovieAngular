import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApisService } from '../../apis.service';

@Component({
  selector: 'app-movie-list-on-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './movie-list-on-home.component.html',
  styleUrl: './movie-list-on-home.component.scss'
})
export class MovieListOnHomeComponent implements OnInit{

  @Input() movie:any
  


  constructor(private apiService : ApisService, private router: RouterModule){

  }

  //  @Input()  trendingMovieResult:  any 
  //   @Input() popularMovie: any


  ngOnInit(): void {
    // this.apiService.fetchTrendingMovie().then((response) =>{
    //   this.movie.trendingMovieResult = response
    //   // console.log(this.trendingMovieResult)
    // })
    // this.apiService.fetchPopularMovie().then((response) =>{
    //   this.movie.popularMovie = response
    //   // console.log(this.trendingMovieResult)
    // })
  }



  


}
