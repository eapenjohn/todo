import { Component, OnInit } from '@angular/core';

import { TodoService, ToggleService } from '../../services';
import { Todo } from '../../models'

@Component({
  selector: 'todo-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  constructor(private todoService: TodoService, private toggeleService: ToggleService) { }
  todos: Todo[];
  ngOnInit() {
    this.todoService.get().subscribe((data) => { this.todos = data })
    this.toggeleService.obsevables.subscribe((id) => this.onToggeltodo(id))
  }

  onAddTodo(todo) {

    this.todoService.add(todo).subscribe((todo) => {
    });
  }

  onToggeltodo(id) {
    this.todoService.toggleComplete(id);
  }

  onDelete(id) {
    this.todoService.delete(id).subscribe(() => this.todos = this.todos.filter((item) => item.id !== id))
  }
}
