import { Component, OnInit } from '@angular/core';

import {TodoService} from '../../services';
import {Todo} from  '../../models';

@Component({
  selector: 'todo-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  todo: Todo = new Todo();
   
  constructor() { }

  ngOnInit() {
  }

}
