import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  remove()
  {
    console.log('dd')
    this.removeEvent.emit(this.todo)
  }

  toggleTodoComplete()
  {
   this.toggleEvent.emit(this.todo)
  }

}
