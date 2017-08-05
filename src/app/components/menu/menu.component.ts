import { Component } from '@angular/core';

import {AjaxService} from './../../services/ajax.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.template.html',
  styleUrls: ['./menu.style.css']
})
export class MenuComponent {
  public model: any;
  constructor(private ajax: AjaxService) {
    this.model = {}
    this.model.data = [];
    this.loadQuestionData();
  }

  loadQuestionData() {
    this.ajax.call("assets/data/response-export.json").then((response) => {
      // ajax call success
      console.log(response.data);
      let keys = Object.keys(response.data);
      for(let index=0; index<keys.length; index++) {
        this.model.data.push(response.data[keys[index]]);
      }
    }, () => {
      // ajax call failed
      console.log("error");
    });
  }
}