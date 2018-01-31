import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  userName: string = "blah";
  status: boolean = true;
  constructor(private router: Router) { }
  login(email: string, pass: string) {
    this.userName = email;
    this.status = true;
  }
  logout() {
    this.status = false;
    this.userName = "blah";
    this.router.navigate(['/people']);
  }
}
