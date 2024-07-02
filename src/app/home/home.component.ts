import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormBuilder} from '@angular/forms';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  input = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  })
}
