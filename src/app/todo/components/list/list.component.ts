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
   this.todos= this.todoService.get();
  }
   toggeltodo()
   {
     
   }

   removeTodo(todo:Todo)
   {
     this.todoService.delete
   }
}

// ListComponent.parameters=[TodoService]
