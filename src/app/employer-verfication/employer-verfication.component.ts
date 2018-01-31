import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-employer-verfication',
  templateUrl: './employer-verfication.component.html',
  styleUrls: ['./employer-verfication.component.css']
})
export class EmployerVerficationComponent implements OnInit {

  displayMsg: boolean = false;
  myForm: FormGroup;
  isInValid = {
    firstName: 'none',
    lastName: 'none',
    email: 'none',
    pass: 'none',
    terms: 'none'
  };
  error: any;
  constructor(private AuthService: AuthService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) {
    this.route.params.subscribe(params => {
      if (params.save == 'saved') {
        this.displayMsg = true;
        window.scrollTo(0, 0);
      }
    });
    this.myForm = fb.group({
      'text1': ['', Validators.required],
      'email1': ['', Validators.email],
      'text2': ['', Validators.required],
      'email2': ['', Validators.email],
      'text3': ['', Validators.required],
      'email3': ['', Validators.email],
      email1s: this.fb.array([]),
      email2s: this.fb.array([]),
      email3s: this.fb.array([])
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
    this.email2s.push(this.createE2());
  }
  get email2s(): FormArray {
    return this.myForm.get('email2s') as FormArray;
  };

   createE3(): FormGroup {
    return this.fb.group({
      email3: ''
    });
  }
  addE3(): void {
    this.email3s.push(this.createE3());
  }
  get email3s(): FormArray {
    return this.myForm.get('email3s') as FormArray;
  };


  addRow(label) {
    if (label == 'email1') {
      this.addE1();
    }
    else if (label == 'email2')
      this.addE2();
    else if (label == 'email3')
      this.addE3();
  }
  onSubmit(data) {
    if (data.status != "INVALID") {
      this.displayMsg = true;
      this.router.navigate(['/employer_verification/saved']);
    }
    else
      this.error = "Fill in all the details correctly";
  }
}
