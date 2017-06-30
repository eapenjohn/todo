import { Component, OnInit } from '@angular/core';

import {TodoService} from '../../services';

@Component({
  selector: 'todo-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  constructor(private todoService :TodoService) { }

  ngOnInit() {
  }

  onAddTodo(todo)
  {
    this.todoService.add(todo).subscribe();
  }

}
