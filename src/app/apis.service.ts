import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})




export class ApisService {
 

  constructor( public  http : HttpClient ) {}

  apiUrl ='https://api.themoviedb.org/3/authentication/token/new'
    
  async fetchData(): Promise<any> {
     const response =  this.http.get<any>(this.apiUrl , {
    headers :  {
      Authorization : `Bearer ${environment.API_READ_ACCESS_TOKEN}` 
    },
    
  })
    const lastValue = await lastValueFrom(response)
    const request_token = lastValue.request_token


    const url =
    'https://www.themoviedb.org/authenticate/' +
    request_token +
    '?redirect_to=http://localhost:4200';

  window.open(url, '_self');
};












//  searchedMovie = `https://api.themoviedb.org/3/search/movie?query=${inputText}`
 searchedMovie = `https://api.themoviedb.org/3/search/movie?query=`

async fetchSearchedMovie(query: string) : Promise<any> {
  if( !query || query.trim() === ''){

    throw new Error('query parameter should not be empty string or null')

  }
  const response = this.http.get<any>(this.searchedMovie + query, {
    headers :  {
      Authorization : `Bearer ${environment.API_READ_ACCESS_TOKEN}` 
    },

  })
  const lastValue = await lastValueFrom(response)
  // console.log(lastValue)
  return lastValue;

  // console.log(lastValue)


}
 searchedTv = `https://api.themoviedb.org/3/search/tv?query=`

async fetchSearchedTv(query: string) : Promise<any> {
  if( !query || query.trim() === ''){

    throw new Error('query parameter should not be empty string or null')

  }
  const response = this.http.get<any>(this.searchedTv + query, {
    headers :  {
      Authorization : `Bearer ${environment.API_READ_ACCESS_TOKEN}` 
    },

  })
  const lastValue = await lastValueFrom(response)
  // console.log(lastValue)
  return lastValue;

  // console.log(lastValue)


}

searchedPerson = `https://api.themoviedb.org/3/search/person?query=`



async fetchSearchedPerson(query: string) : Promise<any> {
  if( !query || query.trim() === ''){

    throw new Error('query parameter should not be empty string or null')

  }
  const response = this.http.get<any>(this.searchedPerson + query, {
    headers :  {
      Authorization : `Bearer ${environment.API_READ_ACCESS_TOKEN}` 
    },

  })
  const lastValue = await lastValueFrom(response)
  // console.log(lastValue)
  return lastValue;

  // console.log(lastValue)


}


trendingMovie = 'https://api.themoviedb.org/3/trending/movie/'

async fetchTrendingMovie(type : string): Promise<any>{
  const response = this.http.get<any>(this.trendingMovie + type,{
    headers :  {
      Authorization : `Bearer ${environment.API_READ_ACCESS_TOKEN}` 
    },
  })

  const lastValue = await lastValueFrom(response)
  return lastValue;

  // console.log(lastValue)


  
}

popularMovie = 'https://api.themoviedb.org/3/movie/popular'

async fetchPopularMovie(): Promise<any>{
  const response = this.http.get<any>(this.popularMovie,{
    headers :  {
      Authorization : `Bearer ${environment.API_READ_ACCESS_TOKEN}` 
    },
  })

  const lastValue = await lastValueFrom(response)
  return lastValue;

  // console.log(lastValue)


  
}








  


  }




    // http.get(' https://api.themoviedb.org/3/authentication/token/new ' ).subscribe(config => {
    //   console.log(config)
   
    // });


   
   



// headers :  {
 // Authorization : `Bearer ${environment.API_READ_ACCESS_TOKEN}` //
//}