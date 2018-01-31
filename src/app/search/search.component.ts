import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetPersonsService } from '../services/get-persons.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  routerSub: any;
  display: string = "none";
  pageNo: number = 1;
  jobs: any[] = [];
  listTobeDisplayed: any[] = [];
  sortBy: string = "references";
  constructor(private router: Router, private route: ActivatedRoute, public GetPersonsService: GetPersonsService) {
    this.routerSub = this.route.params.subscribe(params => {
      if (params.id == 'person') {
        this.listTobeDisplayed = GetPersonsService.persons;
      }
      else if (params.id == 'job') {
        this.listTobeDisplayed = this.jobs;
      }
      else {
        this.router.navigate(['/people']);
        this.routerSub.unsubscribe();
      }
    });
  }
  SortByReference() {
    this.sortBy = 'references';
    console.log(this.sortBy);

  }
  SortByDate() {
    this.sortBy = 'date';
    console.log(this.sortBy);
  }
  ngOnInit() {


  }
  ngOnDestroy() {
    this.routerSub.unsubscribe();
  }

}
