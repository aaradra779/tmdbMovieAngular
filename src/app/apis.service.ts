import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApisService {
 

  constructor( private  http : HttpClient ) {}

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
  console.log(lastValue)

}


    //return lastValueFrom(response)


  }




    // http.get(' https://api.themoviedb.org/3/authentication/token/new ' ).subscribe(config => {
    //   console.log(config)
   
    // });


   
   



// headers :  {
 // Authorization : `Bearer ${environment.API_READ_ACCESS_TOKEN}` //
//}