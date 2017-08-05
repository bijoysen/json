import { Component } from '@angular/core';
import {AjaxService} from './../../services/ajax.service';

@Component({
  selector: 'content',
  templateUrl: './content.template.html',
  styleUrls: ['./content.style.css']
})
export class ContentComponent {
  private setNumber: number;
  private questionNumber: number;
  private questionDataSet: any;
  public question: any;

  constructor(private ajax: AjaxService) {
    this.getAndStoreQuestionDataSet();
    this.question = {};
    window.addEventListener("hashchange", () => {
      this.parseLocation(window.location.hash);
    });
  }

  getAndStoreQuestionDataSet() {
    this.ajax.call("assets/data/response-export.json").then((response) => {
      // ajax call success
      this.questionDataSet = response.data;
      this.loadQuestion(0, 0);
    }, () => {
      // ajax call failed
      console.log("error");
    });
  }
  
  parseLocation(location: string) {
    let setqsnValue = location.split("/").pop().split("&");
    this.setNumber = parseInt(setqsnValue[0].split("set=").pop());
    this.questionNumber = parseInt(setqsnValue[1].split("qsn=").pop());
    if(typeof this.setNumber !== "undefined" && typeof this.questionNumber !== "undefined") {
      this.loadQuestion(this.setNumber, this.questionNumber);
    }
  }

  loadQuestion(setNumber: number, questionNumber: number) {
    this.question = this.questionDataSet[setNumber+1].Questions[questionNumber];
    console.log(this.question);
  }
}