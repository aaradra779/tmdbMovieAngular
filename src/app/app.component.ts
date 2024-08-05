import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {HomeComponent} from './page/home/home.component';
import { SearchlistPageComponent } from './page/searchlist-page/searchlist-page.component';
import { FooterComponent } from "./component/footer/footer.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule, SearchlistPageComponent, FooterComponent],
  template: `
 

      <router-outlet></router-outlet>


`,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'project-1-angular';
}
