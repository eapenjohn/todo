import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import {TodoService} from './services';
import { ListComponent, FooterComponent,CreateComponent, ItemComponent,RootComponent } from './components';


@NgModule({
  providers:[TodoService],
  imports: [
    CommonModule,
     FormsModule ,
     HttpModule
  ],
  exports:[RootComponent],
  declarations: [
     ListComponent,
     RootComponent,
     FooterComponent,
     CreateComponent,
    //  TodoComponent,
     ItemComponent
    ]
})
export class TodoModule { }
