import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import {TodoService} from './services';
import { ListComponent, FooterComponent,CreateComponent} from './components';
import { RootComponent } from './components/root/root.component'


@NgModule({
  providers:[TodoService],
  imports: [
    CommonModule,
     FormsModule 
  ],
  exports:[RootComponent],
  declarations: [
     ListComponent,
     RootComponent,
     FooterComponent,
     CreateComponent
    ]
})
export class TodoModule { }
