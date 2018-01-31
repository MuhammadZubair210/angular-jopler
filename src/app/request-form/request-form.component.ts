import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {
  myForm: FormGroup;
  isInValid = {
    firstName: 'none',
    lastName: 'none',
    email: 'none',
    pass: 'none',
    terms: 'none'
  };
  error: any;
  displayMsg: boolean = false;
  constructor(private AuthService: AuthService, private fb: FormBuilder) {

    this.myForm = fb.group({
      'coreCompetency': ['', Validators.required],
      'social': ['', Validators.required],
      'ethics': ['', Validators.required],
      'dependability': ['', Validators.required],
      'creativity': ['', Validators.required],
      'adaptability': ['', Validators.required],
      'leadership': ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  onSubmit(data) {
    if (data.status == "INVALID")
      this.error = "Fill in all the details correctly";
    else
      this.displayMsg = true;
  }
}
