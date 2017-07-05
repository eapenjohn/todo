import { Component, OnInit, Input } from '@angular/core';

import { TodoService } from '../../services';
import { Todo } from '../../models'


@Component({
  selector: 'todos-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input()
   todos : Todo []
  constructor() { }

  ngOnInit() {
  }

}
