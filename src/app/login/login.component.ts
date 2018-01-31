import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  isInValid = {
    email: 'none',
    password: 'none'
  };
  error: any;
  constructor(private fb: FormBuilder, private AuthService: AuthService, private router: Router) {
    this.myForm = fb.group({
      'email': ['', Validators.email],
      'password': ['', Validators.required]
    })
  }

  ngOnInit() {
  }
  onSubmitLogin(data) {
    if (data.controls.email.status != "VALID") {
      this.isInValid.email = "true";
      this.error = "Please type in correct email ";
    }
    else if (data.controls.password.status != "VALID") {
      this.isInValid.password = "true";
      this.error = "Please type in password";
    }
    else {
      this.isInValid = {
        email: 'none',
        password: 'none'
      };
      this.error = "";
      this.AuthService.login(data.controls.email.value, data.controls.password.value);
      this.router.navigate(['/profile']);
    }

  }
}
