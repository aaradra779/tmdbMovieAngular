import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApisService } from '../apis.service';



@Component({
  selector: 'app-searchlist-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './searchlist-page.component.html',
  styleUrl: './searchlist-page.component.scss'
})
export class SearchlistPageComponent implements OnInit {
  route : ActivatedRoute = inject(ActivatedRoute)
  // homeComponentId = 1
  text: string = ''


  constructor(private readonly apiService : ApisService){



  }
  


ngOnInit(): void {
  this.route.queryParamMap.subscribe(params =>{
    this.text = params.get('q') || ''

  })

  console.log(this.text)
  this.apiService.fetchSearchedMovie(this.text)
  
}


}
