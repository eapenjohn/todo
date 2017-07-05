import { Component, OnInit } from '@angular/core';

import { TodoService } from '../../services';
import { Todo } from '../../models'

@Component({
  selector: 'todo-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  constructor(private todoService: TodoService) { }
  todos: Todo[];
  ngOnInit() {
    this.todoService.get().subscribe((data) => this.todos = data)

  }

  onAddTodo(todo) {
    this.todoService.add(todo).subscribe((todo) => {
      console.log(todo)
      this.todos.push(todo)
    });
  }

  onToggeltodo()
  {
    console.log('jjjlfjsdafldsj')
  }

  onDelete(id) {
    console.log('rerrere')
    this.todoService.delete(id).subscribe(() => this.todos = this.todos.filter((item) => item.id !== id))
  }
}
