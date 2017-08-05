import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import {AjaxService} from './../../services/ajax.service';
import * as $ from 'jquery';

@Component({
  selector: 'menu',
  templateUrl: './menu.template.html',
  styleUrls: ['./menu.style.css']
})
export class MenuComponent  implements AfterViewInit {
  public model: any;
  public activeSetNumber: number;
  public activeQuestionNumber: number;
  constructor(private ajax: AjaxService) {
    this.model = {}
    this.model.data = [];
    this.loadQuestionData();
    window.addEventListener("hashchange", () => {
      this.markQuestionAndSet(window.location.hash);
    });
  }

  markQuestionAndSet(location: string) {
    if(location !== "") {
      let setqsnValue = location.split("/").pop().split("&");
      this.activeSetNumber = parseInt(setqsnValue[0].split("set=").pop());
      this.activeQuestionNumber = parseInt(setqsnValue[1].split("qsn=").pop());
      $("div[data-type='set']").removeClass("active");
      $("div[data-type='set']").eq(this.activeSetNumber).addClass("active");
     
      let setDiv = $("div[data-type='set']").eq(this.activeSetNumber)[0];
      $("li[data-type='question']").removeClass("active");
      $("li[data-type='question']", setDiv).eq(this.activeQuestionNumber).addClass("active");
    }
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
  ngAfterViewInit() {

  }
}