import { Component, OnInit } from '@angular/core';

import {TodoService} from '../../services';
import {Todo} from  '../../models'

@Component({
  selector: 'todos-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
   todos:Todo[];
  constructor( private todoService :TodoService) { }
  
  ngOnInit() {
      this.todoService.add(new Todo({title:'God of small things', complete : false}))
  this.todoService.get().subscribe(todos => this.todos = todos);
  }
   onToggeltodo(todo:Todo)
   {
     this.todoService.toggleComplete(todo.id);
   }

   onRemoveTodo(todo:Todo)
   {
     this.todos=this.todoService.delete(todo.id);
   }
   toggleTodoComplete(todo)
   {
     
   }
}

// ListComponent.parameters=[TodoService]
