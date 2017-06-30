import { Component, OnInit } from '@angular/core';

import { TodoService } from '../../services';
import { Todo } from '../../models'


@Component({
  selector: 'todos-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
   todos : Todo []
  constructor(private todoservice: TodoService) { }

  ngOnInit() {
   this.todoservice.get().subscribe(todos => this.todos= todos);
  }

}
