import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormBuilder, NgForm, FormsModule} from '@angular/forms';
import { find } from 'rxjs';
import { ApisService } from '../apis.service';
import { Router, RouterModule } from '@angular/router';




interface TodoItem {
  displayedText : string,
  checked : boolean,

}




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ FormsModule, CommonModule , RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  data : any;
  homeComponent: any



  constructor(private apiService : ApisService , private router : Router) {

 

  }
  async fetchData(){
    const response = await  this.apiService.fetchData()
    console.log(response)
  
  }

  




  inputText: string = '';
  todoList : TodoItem[] = []

  

  
  ngOnInit(): void {

    const storedData  = localStorage.getItem('todoList')
    if(storedData){
      this.todoList = JSON.parse(storedData)
    }

    
  }

  displayText() {
    // this.displayedText = this.inputText;
    if (this.inputText!== ''){
      const newTodoItem : TodoItem = {
        displayedText: this.inputText,
        checked : false
      } 
      this.todoList.push(newTodoItem)
      localStorage.setItem('todoList' ,JSON.stringify(this.todoList) )
      this.inputText = ''

    }
  }

  @Input({transform: appendPx}) widthPx: number = 0;



  @Output() eventEmitter = new EventEmitter();

  
  deleteText(index : number){

    this.todoList.splice(index, 1)
    localStorage.setItem('todoList' ,JSON.stringify(this.todoList) )

  }

  onCheck(i : number){
    this.todoList[i].checked = !this.todoList[i].checked
    localStorage.setItem('todoList' ,JSON.stringify(this.todoList) )



  }

  searchedText : string = ''
 findsearchedMovie: string = ''






  // searchMoive(){
  //   this.router.navigate(['/searchList' , this.searchedText] )
  //   console.log(this.searchedText)
  //   // this.findsearchedMovie = this.searchedText

  // }




}


function appendPx(value: string) {
  return `${value}px`;
}

console.log(appendPx('hello'))


