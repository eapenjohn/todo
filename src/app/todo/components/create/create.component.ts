import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import {Todo} from  '../../models';

@Component({
  selector: 'todo-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

 public todo: Todo = new Todo();
 @Output()
  todoAddEvent: EventEmitter<Todo>= new EventEmitter() 

   
  constructor() { }

  ngOnInit() {
  }
  
  addtTodo()
  {
  this.todoAddEvent.emit(this.todo)
  }
}
