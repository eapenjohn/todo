import { Component, OnInit } from '@angular/core';

import {TodoService} from '../../services';
import {Todo} from  '../../models';

@Component({
  selector: 'todo-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

 public todo: Todo = new Todo();
   
  constructor(private todoService :TodoService) { }

  ngOnInit() {
  }
  
  addtTodo()
  {
   this.todoService.add(this.todo)
  }
}
