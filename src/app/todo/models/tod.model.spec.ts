import { Todo } from './todo.model';

describe('Tod', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('costructor assigning the property values', () => {
    var todo = new Todo({
      id: 1,
      title: 'title',
      complete: false
    })

    expect(todo.complete).toBeFalsy();
    expect(todo.id).toEqual(1);
    expect(todo.title).toEqual('title');
  })
});
