import { TestBed, inject } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { Todo } from '../models/todo.model'

describe('TodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoService]
    });
  });

  it('should be created', inject([TodoService], (service: TodoService) => {
    expect(service).toBeTruthy();
  }));

  describe('#add', () => {
    it('suceessfully added todo', inject([TodoService], (todoService: TodoService) => {
      var todo1 = new Todo({ title: 'john', complete: true });
      todoService.add(todo1)

      expect(todoService.get()).toEqual([todo1])
    }))

    it('add method update the id of the todo', inject([TodoService], (todoService: TodoService) => {
      var todo1 = new Todo({ title: 'john', complete: true });
      var todo2 = new Todo({ title: 'john', complete: true });
      todoService.add(todo1);
      todoService.add(todo2);

      expect(todoService.getById(2)).not.toBeNull();
    }))
  })

  describe('#get', () => {
    it('returns empty array', inject([TodoService], (todoService) => {
      expect(todoService.get()).toEqual([]);
    }))

    it('get reurns all the todos', inject([TodoService], (todoService: TodoService) => {
      var todo1 = new Todo({ title: 'john', complete: true });
      var todo2 = new Todo({ title: 'john', complete: true });
      todoService.add(todo1);
      todoService.add(todo2);

      expect(todoService.get()).toEqual([todo1, todo2]);
    }))
  })

  describe('#getByid', () => {
    it('returns null for id not exist', inject([TodoService], (todoService) => {
      expect(todoService.getById()).toBeNull;
    }))

    it('getById reurns todo', inject([TodoService], (todoService: TodoService) => {
      var todo1 = new Todo({ title: 'john', complete: true });
      var todo2 = new Todo({ title: 'john', complete: true });
      todoService.add(todo1);
      todoService.add(todo2);

      expect(todoService.getById(1)).toEqual(todo2);
    }))
  })

  describe('#toggeltodo', () => {
    it('toggle the complete prop value', inject([TodoService], (todoService: TodoService) => {
      var todo1 = new Todo({ title: 'john', complete: true });
      todoService.add(todo1);

      todoService.toggleComplete(0)
      let todo = todoService.getById(0);
      expect(todo.complete).toBeFalsy();
    }))
  })

  describe('#delete', () => {
   it("delete removes item from list", inject([TodoService], (todoService:TodoService) =>{
      var todo1 = new Todo({ title: 'john', complete: true });
      todoService.add(todo1);

     let todos= todoService.delete(0)
      expect(todos.length).toBe(0);
   }))
  })
});
