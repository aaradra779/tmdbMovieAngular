import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  input,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  FormBuilder,
  NgForm,
  FormsModule,
} from '@angular/forms';
import { find } from 'rxjs';
import { ApisService } from '../../apis.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DetailsPageComponent } from '../../component/details-page/details-page.component';
import { NavBarComponent } from '../../component/nav-bar/nav-bar.component';
import { MovieListOnHomeComponent } from '../../component/movie-list-on-home/movie-list-on-home.component';
import { FooterComponent } from '../../component/footer/footer.component';


interface TodoItem {
  displayedText: string;
  checked: boolean;
}

export enum MovieFilter {
  day = 'day', 
  week = 'week'
  
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [

    FormsModule,
    CommonModule,
    RouterModule,
    NavBarComponent,
    MovieListOnHomeComponent,
    FooterComponent,
  ],
  templateUrl: `./home.component.html`,
  styleUrl: './home.component.scss',
})





export class HomeComponent implements OnInit {
  data: any;
  homeComponent: any;

  constructor(private apiService: ApisService, private router: Router) {}

  searchedText: string = '';
  inputText: string = '';
  todoList: TodoItem[] = [];
  trendingMovieResult: any;
  popularMovie: any;
  response: string = '';
  movieFilter: typeof  MovieFilter = MovieFilter
  activeButton: MovieFilter = MovieFilter.day
  request: any
  request_token : any


client = 'https://api.themoviedb.org/3/authentication/session/new'
  route : ActivatedRoute = inject(ActivatedRoute)

  ngOnInit(): void {
  
    const storedData = localStorage.getItem('todoList');
    if (storedData) {
      this.todoList = JSON.parse(storedData);
    }


    this.click(this.movieFilter.day)
    
    this.apiService.fetchPopularMovie().then((response) => {
      this.popularMovie = response;
      // console.log(this.trendingMovieResult)
    });
  }

  click(text: MovieFilter) {
    this.apiService.fetchTrendingMovie(text).then((response) => {
      this.response = response;
      // console.log(response);
      this.activeButton = text
     
    });
  }

  displayText() {
    
    if (this.inputText !== '') {
      const newTodoItem: TodoItem = {
        displayedText: this.inputText,
        checked: false,
      };
      this.todoList.push(newTodoItem);
      localStorage.setItem('todoList', JSON.stringify(this.todoList));
      this.inputText = '';
    }
  }

  @Input({ transform: appendPx }) widthPx: number = 0;

  @Output() eventEmitter = new EventEmitter();

  deleteText(index: number) {
    this.todoList.splice(index, 1);
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }

  onCheck(i: number) {
    this.todoList[i].checked = !this.todoList[i].checked;
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }




}

function appendPx(value: string) {
  return `${value}px`;
}

console.log(appendPx('hello'));
