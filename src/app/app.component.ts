import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { SearchlistPageComponent } from './searchlist-page/searchlist-page.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule, SearchlistPageComponent],
  template: `
 
 
      <router-outlet></router-outlet>


`,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'project-1-angular';
}
