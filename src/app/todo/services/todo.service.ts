import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import {Observable} from 'rxjs'
import 'rxjs/add/operator/map';

import { Todo } from '../models/todo.model'

import {environment} from '../../../environments/environment' 

@Injectable()
export class TodoService {
  todos = Array<Todo>();
  constructor(private http:Http) {
   
    //  this.add(new Todo({title: 'john', complete :false}))
   }

  get() {
   return  this.http.get(environment.apiUrl+'/todos').map((response) =>{
       let todos= response.json();
       return  todos.map((item) => new Todo(item))
     })
  }

   add(todo: Todo)
   {
    //  todo.id= this.todos.length;
    //  this.todos.push(todo);
     return this.http.post(environment.apiUrl+'/todos', todo);

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
    this.todos =this.todos.filter(item => item.id !== id);
    return this.todos;
   
  }
}
