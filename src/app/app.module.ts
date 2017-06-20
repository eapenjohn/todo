import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import {TodoModule} from './todo'
import { AppComponent } from './app.component';
import { RootComponent } from './todo/components/root/root.component';

@NgModule({
  declarations: [
    AppComponent,
      // ListComponent,

  ],
  imports: [
     TodoModule,
    BrowserModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
