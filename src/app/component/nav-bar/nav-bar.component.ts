import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApisService } from '../../apis.service';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {


  constructor( private apiService : ApisService, private router : RouterModule )
{

}


  async fetchData(){
    const response = await  this.apiService.fetchData()
  
  }

}
