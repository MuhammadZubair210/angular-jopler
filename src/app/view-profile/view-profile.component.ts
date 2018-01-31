import { Component, OnInit } from '@angular/core';
import { GetPersonsService } from '../services/get-persons.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  personDetails: {
    firstname: "",
    lastname: "",
    address:"",
    country: "",
    city: "",
    state: "",
    phone: 0,
    summary: "",
    employments: [
      {
        title: "",
        client: "",
        country: "",
        city: "",
        state: "",
        startdate: '',
        enddate: '',
        responsibilites: ""
      }
    ],
    Education: [
      {
        degree: "",
        school: "",
        country: "",
        year:0 
      }
    ],
    certifications: [
      {
        name: ""
      }
    ],
    Training: [
      {
        name: ""
      }
    ],
    Skills: [
      {
        name: ""
      }
    ],
    date: 0

  };
  joppler_score = [];
  routerSub: any;
  constructor(private GetPersonsService: GetPersonsService, private router: Router, private route: ActivatedRoute) {
    this.routerSub = this.route.params.subscribe(params => {
      this.personDetails = GetPersonsService.getParticularPerson(params.id);
      this.joppler_score = GetPersonsService.getParticularPersonJobblerScore(params.id);
    });

  }

  ngOnInit() {
  }

}
