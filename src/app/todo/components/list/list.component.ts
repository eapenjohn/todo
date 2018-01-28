import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

import { TodoService } from '../../services';
import { Todo } from '../../models'

@Component({
  selector: 'todos-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ListComponent implements OnInit {
  @Input()
  todos: Todo[];

  @Output()
  deleteEvent: EventEmitter<number> = new EventEmitter();

  @Output()
  toggleEvent : EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onToggeltodo(todo: Todo) {
  }

  onRemoveTodo(todo: Todo) {
    this.deleteEvent.emit(todo.id)
  }

  toggleTodo(todo) {
   this.toggleEvent.emit(todo.id);
  }
}

// ListComponent.parameters=[TodoService]
