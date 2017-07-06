import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import {TodoService, ToggleService} from './services';
import { ListComponent, FooterComponent,CreateComponent, ItemComponent,RootComponent } from './components';


@NgModule({
  providers:[TodoService, ToggleService],
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
