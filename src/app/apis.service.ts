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
    console.log(request_token, 'hahah')

    const url =
    'https://www.themoviedb.org/authenticate/' +
    request_token +
    '?redirect_to=http://localhost:4200';

  window.open(url, '_self');
};
    //return lastValueFrom(response)


  }




    // http.get(' https://api.themoviedb.org/3/authentication/token/new ' ).subscribe(config => {
    //   console.log(config)
   
    // });


   
   



// headers :  {
 // Authorization : `Bearer ${environment.API_READ_ACCESS_TOKEN}` //
//}