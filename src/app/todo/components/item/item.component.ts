import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TodoService, ToggleService } from '../../services';
import {Todo} from  '../../models'

@Component({
  selector: 'todo-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
    
  @Input()
   todo: Todo;

   @Output()
   removeEvent=new EventEmitter<Todo>();

   @Output()
   toggleEvent= new EventEmitter<Todo>();

  constructor(private toggelSevice: ToggleService) { }

  ngOnInit() {
  }

  remove()
  {
    this.removeEvent.emit(this.todo)
  }

  toggleTodoComplete()
  {
    this.toggelSevice.toggled(this.todo.id)
  // this.toggleEvent.emit(this.todo)
  }

}
