import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pass-recovery',
  templateUrl: './pass-recovery.component.html',
  styleUrls: ['./pass-recovery.component.css']
})
export class PassRecoveryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmitrecover(data) {
    console.log(data);
  }
}
