import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  myForm: FormGroup;
  error: any;
  constructor(private router:Router,private fb: FormBuilder) {
    this.myForm = fb.group({
      'location': ['', Validators.required],
      'personJob': ['', Validators.required]
    })
  }

  ngOnInit() {
  }
  onSubmitSearch(data) {
    if (data.controls.location.status != "VALID") {
      this.error = "Please type in correct Location";
    }
    else if (data.controls.personJob.status != "VALID") {
      this.error = "Please select person or job";
    }
    else {
      this.error = "";
      this.router.navigate(['/search/'+data.controls.personJob.value]);
    }

  }
}
