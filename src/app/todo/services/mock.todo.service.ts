import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'

import { Todo } from '../models/todo.model'


@Injectable()
export class MockTodoService {

    get() : Observable<Todo[]>
    {
        return Observable.of([new Todo({id:1 , title : 'title' , complete : true})])

    }

    add(todo: Todo) : Observable<Todo[]>
    {
        return Observable.of([new Todo({id:1 , title : 'title' , complete : true})])

    }

    getById(todo: Todo) : Observable<Todo[]>
    {
        return Observable.of([new Todo({id:1 , title : 'title' , complete : true})])

    }
    toggleComplete()
    {
        return Observable.of(true)
    }
    
    update(todo: Todo) : Observable<Todo[]>
    {
        return Observable.of([new Todo({id:1 , title : 'title' , complete : true})])

    }

    delete(id:number)
    {
         return Observable.of(true)
    }

}
