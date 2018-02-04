import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable, Subject } from 'rxjs'
import 'rxjs/add/operator/map';

import { Todo } from '../models/todo.model'

import { environment } from '../../../environments/environment'

@Injectable()
export class TodoService {
  todos = Array<Todo>();
  constructor(private http: Http) {

    //  this.add(new Todo({title: 'john', complete :false}))
  }

  get() {
    return Observable.of(this.todos);
  }

  add(todo: Todo) {
    todo.id = this.todos.length >0 ? this.todos[this.todos.length -1 ].id +1 :1;
    this.todos.push(todo);
    return Observable.of(todo);

  }

  getById(id: number): Observable<Todo> {
    return this.http.get(environment.apiUrl + '/todos/' + id)
      .map(response => new Todo(response.json()))
      .catch(this.handleError);
  }

  toggleComplete(id) {
    return this.getById(id).subscribe(todo => {
      todo.complete = !todo.complete;
      this.update(todo).subscribe()
    })
  }

  update(todo: Todo) {
    return this.http.put(environment.apiUrl + '/todos/' + todo.id, todo)
      .map(response => new Todo(response.json()))
      .catch(this.handleError)

  }

  delete(id: number) {
   this.todos = this.todos.filter(todo => todo.id !== id);
   return Observable.of(true);
  }

  handleError(error: Response | any) {
    return Observable.throw(error);
  }
}
