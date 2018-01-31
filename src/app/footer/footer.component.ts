import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  links = [
    {
      path:'about',
      name:'About',
      order:0
    },
    {
      path:'faq',
      name:'FAQ',
      order:1
    },
    {
      path:'terms',
      name:'Terms',
      order:2
    },
    {
      path:'contact',
      name:'Contact',
      order:3
    }
  ];
}
