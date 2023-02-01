import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// RouterModules
import { Routes, RouterModule } from '@angular/router';

//Angular Material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';



//Components
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { HomeComponent } from './home/home.component';

//Form Modules
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewFormComponent } from './new-form/new-form.component';
import { FormComponentComponent } from './form-component/form-component.component';

const routes: Routes=[
  { path:'todo', component: TodoComponent },
  //Path Match Can be 'full' or prefix
  { path: '', redirectTo: '/todo', pathMatch: 'full' },
  // { path:'home', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    HomeComponent,
    NewFormComponent,
    FormComponentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //Material UI test
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTableModule,
    MatCardModule,
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
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
