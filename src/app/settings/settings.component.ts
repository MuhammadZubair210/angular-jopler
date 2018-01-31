import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  myForm: FormGroup;
  isInValid = {
    firstName: 'none',
    lastName: 'none',
    email: 'none',
    pass: 'none',
    terms: 'none'
  };
  error: any;
  constructor(private AuthService: AuthService, private fb: FormBuilder) {

    this.myForm = fb.group({
      'old_password': ['', Validators.required],
      'new_password': ['', Validators.required],
      're_password': ['', Validators.required],
      'ch_public': ['', Validators.required],
      'ch_individuals': ['', Validators.required],
      'text_email': ['', Validators.required],
      'email1': ['', Validators.email],
      'email2': ['', Validators.email],
      email1s: this.fb.array([]),
      email2s: this.fb.array([]),
    });

  }

  ngOnInit() {
  }




  createE1(): FormGroup {
    return this.fb.group({
      email1: ''
    });
  }
  addE1(): void {
    this.email1s.push(this.createE1());
  }
  get email1s(): FormArray {
    return this.myForm.get('email1s') as FormArray;
  };

  


  createE2(): FormGroup {
    return this.fb.group({
      email2: ''
    });
  }
  addE2(): void {
    this.email2s.push(this.createE1());
  }
  get email2s(): FormArray {
    return this.myForm.get('email2s') as FormArray;
  };

  addRow(label) {
    if (label == 'email1') {
      this.addE1();
    }
    else if (label == 'email2') {
      this.addE2();
    }
  }


  onSubmit(data) {
    if (data.status == "INVALID")
      this.error = "Fill in all the details correctly";
  }
}
