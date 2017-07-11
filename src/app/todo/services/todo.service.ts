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
        let subject = new Subject<Todo[]>()
  var get =this.http.get(environment.apiUrl + '/todos').map((response) => {
      let todos = response.json();
      return todos.map((item) => new Todo(item))
    }).catch(this.handleError)

    get.subscribe(subject)
    return subject.asObservable();
     
  }

  add(todo: Todo) {
    return this.http.post(environment.apiUrl + '/todos', todo)
      .map(response => new Todo(response.json()))
      .catch(this.handleError);

  }

  getById(id: number) : Observable<Todo> {
    return this.http.get(environment.apiUrl + '/todos/'+ id)
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
    return this.http.put(environment.apiUrl + '/todos/'+ todo.id, todo)
     .map(response => new Todo(response.json()))
     .catch(this.handleError)
    
  }

  delete(id: number) {
   return this.http.delete(environment.apiUrl + '/todos/' + id)
   .map(response => true )
   .catch(this.handleError);

  }

  handleError(error: Response | any) {
    console.log(error)
    return Observable.throw(error);
  }
}
