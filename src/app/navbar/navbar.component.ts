import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private location: Location,private router: Router,public AuthService:AuthService) { 

  }

  ngOnInit() {
     this.router.events.subscribe((val) => {
      if(this.location.path()=='/login' ||  this.location.path()=='/recover_password')
      {
         this.isActive = -1;
        this.isActiveAuth = 0;
      }
      else if( this.location.path()=='/sign_up')
      {
         this.isActive = -1;
        this.isActiveAuth = 1;
      }
        console.log( );
      
    });
      
  }
  isActive = 0;
  isActiveAuth = -1;
  links = [
    {
      path:'people',
      name:'People',
      order:0
    },
    {
      path:'job',
      name:'Jobs',
      order:1
    }
  ];
  toggleActive(i: number): void {
    this.isActive = i;
    this.isActiveAuth = -1;
    
  }
  toggleActiveAuth(i: number): void {
    this.isActive = -1;
    this.isActiveAuth = i;
  }
}
