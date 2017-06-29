import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { ItemComponent } from '../item/item.component';
import { ListComponent } from './list.component';
import { TodoService } from '../../services';
import {Todo} from  '../../models'

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [TodoService],
      declarations: [ListComponent,ItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('removetodo called the service delelte method', inject([TodoService], (todoservice: TodoService) => {
    spyOn(todoservice,'delete');
    fixture.componentInstance.onRemoveTodo(new Todo({id:0}))
 
   expect(todoservice.delete).toHaveBeenCalled();
  }));
});
