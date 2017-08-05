import { Component } from '@angular/core';
//import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'content',
  templateUrl: './content.template.html',
  styleUrls: ['./content.style.css']
})
export class ContentComponent {
  constructor() {
    // router.events.subscribe((val) => {
    //     // see also 
    //     console.log(val instanceof NavigationEnd) 
    // });
  }
}