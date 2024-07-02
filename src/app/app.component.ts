import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from './home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  template: `
 
 
      <app-home></app-home>


`,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'project-1-angular';
}
