import { Injectable } from '@angular/core';

import { Todo } from '../models/todo.model'

@Injectable()
export class TodoService {
  todos = Array<Todo>();
  constructor() { }

  get() {
    return this.todos;
  }

   add(todo: Todo)
   {
     todo.id= this.todos.length;
     this.todos.push(todo);
   }

  getById(id: number) {
   return  this.todos.find(item => item.id === id);
  }

  toggleComplete(id)
  {
    let todo =this.todos.find(item => item.id === id);;
    todo.complete = !todo.complete;
  }

  update(todo: Todo)
  {
    let todoEntity =this.todos.find(item => item.id === todo.id)
    Object.assign(todoEntity, todo)
  }

  delete(id : number)
  {
    let todoEntity =this.todos.find(item => item.id === id);

  }
}
