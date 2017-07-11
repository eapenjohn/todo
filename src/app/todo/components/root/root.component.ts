import { Component, OnInit } from '@angular/core';

import { TodoService, ToggleService } from '../../services';
import { Todo } from '../../models'

@Component({
  selector: 'todo-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  constructor(private todoService: TodoService, private toggeleService : ToggleService) { }
  todos: Todo[];
  ngOnInit() {
    this.todoService.get().subscribe((data) => { console.log('ss11'); this.todos = data })
      this.todoService.get().subscribe((data) => { console.log('ss111'); this.todos = data })
        this.todoService.get().subscribe((data) => { console.log('ss1111'); this.todos = data })
          this.todoService.get().subscribe((data) => { console.log('1ss11'); this.todos = data })
    this.toggeleService.obsevables.subscribe((id)=> this.onToggeltodo(id))
  }

  onAddTodo(todo) {
      this.todoService.get().subscribe((data) => { console.log('ss'); this.todos = data })
    this.todoService.add(todo).subscribe((todo) => {
      console.log(todo)
      this.todos.push(todo)
    });
  }

  onToggeltodo(id)
  {
   this.todoService.toggleComplete(id);
  }

  onDelete(id) {
    console.log('rerrere')
    this.todoService.delete(id).subscribe(() => this.todos = this.todos.filter((item) => item.id !== id))
  }
}
