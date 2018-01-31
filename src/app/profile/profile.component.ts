import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  ResumeName: string = "";
  pictureFile: string = "";
  displayMsg: boolean = false;
  countries = ['PAKISTAN', 'USA', 'AFRICA'];

  myForm: FormGroup;
  constructor(private AuthService: AuthService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) {
    this.route.params.subscribe(params => {
      if (params.save == 'saved') {
        this.displayMsg = true;
        window.scrollTo(0, 0);
      }
    });
    this.myForm = fb.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'address': ['', Validators.required],
      'country': ['', Validators.required],
      'state': ['', Validators.required],
      'city': ['', Validators.required],
      'contactNo': ['', Validators.required],
      'summary': ['', Validators.required],
      'jobTitle': ['', Validators.required],
      'client': ['', Validators.required],
      'clientCountry': ['', Validators.required],
      'clientState': ['', Validators.required],
      'clientCity': ['', Validators.required],
      'clientStartDate': ['', Validators.required],
      'clientEndDate': ['', Validators.required],
      'clientDuties': ['', Validators.required],
      'educationDegree': ['', Validators.required],
      'educationInstitute': ['', Validators.required],
      'educationCountry': ['', Validators.required],
      'educationYear': ['', Validators.required],
      'certifications0': ['', Validators.required],
      'trainings0': ['', Validators.required],
      'license0': ['', Validators.required],
      'skills0': ['', Validators.required],
      'other': ['', Validators.required],
      certifications: this.fb.array([]),
      licenses: this.fb.array([]),
      trainings: this.fb.array([]),
      skills: this.fb.array([]),
    })
  }

  ngOnInit() {
  }
  updateResumeName(file) {
    this.ResumeName = file.files[0].name;
  }
  updateProfilePicture(picture) {
    this.pictureFile = picture.files[0];
  }
  onSubmit(data) {
    console.log(data);
    //this.displayMsg = true;
    //this.router.navigate(['/profile/saved']);
  }


  get certifications(): FormArray {
    return this.myForm.get('certifications') as FormArray;
  };
  addCertification(): void {
    this.certifications.push(this.createCertification());
  }
  createCertification(): FormGroup {
    return this.fb.group({
      certification: ''
    });
  }

  createtrainings(): FormGroup {
    return this.fb.group({
      training: ''
    });
  }
  addtraining(): void {
    this.trainings.push(this.createtrainings());
  }
  get trainings(): FormArray {
    return this.myForm.get('trainings') as FormArray;
  };

createLiscense(): FormGroup {
    return this.fb.group({
      license: ''
    });
  }
  addLiscense(): void {
    this.licenses.push(this.createLiscense());
  }
  get licenses(): FormArray {
    return this.myForm.get('licenses') as FormArray;
  };

  createSkills(): FormGroup {
    return this.fb.group({
      skill: ''
    });
  }
  addSkills(): void {
    this.skills.push(this.createSkills());
  }
  get skills(): FormArray {
    return this.myForm.get('skills') as FormArray;
  };




  addRow(label) {
    if (label == 'certifications') {
      this.addCertification();
    }
    else if (label == 'training')
      this.addtraining();
    else if (label == 'licenses')
      this.addLiscense();
    else if (label == 'skills')
      this.addSkills();
  }
}
