import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FieldConfig, ButtonConfig, Validators } from '../fieldinterface';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})

export class SignupFormComponent implements OnInit {
  fields: FieldConfig[] = [
    {
      name: 'firstName',
      label: 'First Name',
      inputType: 'text',
      value: '',
      validator: {
        min: 3,
        max: 20,
        message: 'The first name must be between 3 and 20',
      },
      validated: false,
      class: 'first-name-flex',
    },
    {
      name: 'lastName',
      label: 'Last Name',
      inputType: 'text',
      value: '',
      validator: {
        min: 3,
        max: 20,
        message: 'The last name must be between 3 and 20',
      },
      validated: false,
      class: 'last-name-flex',
    },
    {
      name: 'email',
      label: 'Email',
      inputType: 'email',
      value: '',
      validator: {
        message: 'The email is not valid'
      },
      validated: false,
    },
    {
      name: 'password',
      label: 'Password',
      inputType: 'password',
      value: '',
      validator: {
        min: 6,
        max: 12,
        message: 'The password must be between 6 and 12.'
      },
      validated: false,
    },
    {
      name: 'confirmPassword',
      label: 'Confirm Password',
      inputType: 'password',
      value: '',
      validator: {
        min: 6,
        max: 12,
        message: 'The password must be between 6 and 12.'
      },
      validated: false,
    },
  ];

  buttons: ButtonConfig[] = [
    {
      type: 'submit',
      value: 'Submit',
      class: 'btn btn-primary',
    },
  ];

  constructor() { }

  submit(signup: any): void {
    signup.form.touched = true;
    signup.form.pristine = false;
    this.fields.forEach(field => {
      if (!field.validated){
        signup.form.status = 'INVALID';
      }
    });
    if (signup.form.status === 'VALID'){
        signup.form.value = {
        firstName: this.fields[0].value,
        lastName: this.fields[1].value,
        email: this.fields[2].value,
        password: this.fields[3].value,
        confirmPassword: this.fields[4].value
      };
    } else {
      signup.ngSubmit.hasError = true;
    }
    console.log(signup);
  }

  ngOnInit(): void {
  }



}
