import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApisService } from '../../apis.service';
import { CommonModule } from '@angular/common';


// interface resultList{
//   results: string
 

// }



@Component({
  selector: 'app-searchlist-page',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './searchlist-page.component.html',
  styleUrl: './searchlist-page.component.scss'
})
export class SearchlistPageComponent implements OnInit {
  route : ActivatedRoute = inject(ActivatedRoute)
  // homeComponentId = 1
  
  text: string = ''
  // lastValue: any;
  results: any
  errorMessage : string = ''

 
  


  constructor(private readonly apiService : ApisService){



  }
  



ngOnInit(): void {



this.route.queryParamMap.subscribe(params =>{
    this.text = params.get('q') || ''

  })

  // console.log(this.text)
  if(this.text){
     this.apiService.fetchSearchedMovie(this.text).then((response) =>{
      this.results = response;
      console.log(this.results)

     }).catch((error)=>{
      this.errorMessage = error.message
      this.results = []
     })

     
  
    
    


    
  }
  
  
 
  
}


}
