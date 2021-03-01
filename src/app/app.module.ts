import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { FormButtonComponent } from './form-button/form-button.component';
import { FormFieldComponent } from './form-field/form-field.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    FormButtonComponent,
    FormFieldComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
