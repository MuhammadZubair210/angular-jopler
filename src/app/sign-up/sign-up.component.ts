import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  myForm: FormGroup;
  isInValid = {
    firstName: 'none',
    lastName: 'none',
    email: 'none',
    pass: 'none',
    terms: 'none'
  };
  error: any;
  constructor(private fb: FormBuilder, private AuthService: AuthService, private router: Router) {
    this.myForm = fb.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email': ['', Validators.email],
      'password': ['', Validators.required],
      'terms': ['', Validators.required],

    })
  }

  ngOnInit() {

  }
  onSubmitSignUp(data) {
    if (data.controls.firstName.status != "VALID") {
      this.isInValid.firstName = "true";
      this.error = "Please type in First Name";
    }
    else if (data.controls.lastName.status != "VALID") {
      this.isInValid.lastName = "true";
      this.error = "Please type in Last Name";
    }
    else if (data.controls.email.status != "VALID") {
      this.isInValid.email = "true";
      this.error = "Please type in Correct Email Address";
    }
    else if (data.controls.password.status != "VALID") {
      this.isInValid.pass = "true";
      this.error = "Please type in password";
    }
    else if (data.controls.terms.status != "VALID") {
      this.isInValid.terms = "true";
      this.error = "Please Agree to terms and conditions";
    }
    else {
      this.isInValid = {
        firstName: 'true',
        lastName: 'true',
        email: 'true',
        pass: 'true',
        terms: 'true'
      };
      this.error = "";
      this.AuthService.login(data.controls.email.value, data.controls.password.value);
      this.router.navigate(['/profile']);
    }

  }
}
