import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// RouterModules
import { Routes, RouterModule } from '@angular/router';

//Angular Material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field'

//Components
import { TodoComponent } from './todo/todo.component';
import { HomeComponent } from './home/home.component';

//Form Modules
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes=[
  { path:'todo', component: TodoComponent },
  //Path Match Can be 'full' or prefix
  { path: '', redirectTo: '/todo', pathMatch: 'full' },
  { path:'', component: TodoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    //Material UI test
    MatSlideToggleModule,
    MatFormFieldModule,
    //Router
    RouterModule.forRoot(routes),
    //Form
    FormsModule,
    ReactiveFormsModule,
  ],
  //need to add Export for Router Module
  exports:[
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
