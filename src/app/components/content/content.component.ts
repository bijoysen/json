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
    this.preparePrevNextButtonData(setNumber, questionNumber);
  }

  public enablePrev: boolean;
  public enableNext: boolean;

  public prevHref: string;
  public nextHref: string;

  preparePrevNextButtonData(setNumber: number, questionNumber: number) {
    this.enablePrev = true;
    this.enableNext = true;
    
    if(setNumber === 0 && questionNumber === 0) {
      this.enablePrev = false;
      this.enableNext = true;
    }

    // setting next button
    let nextSetNumber = setNumber;
    let nextQuestionNumber = questionNumber+1;
    if(nextQuestionNumber >= this.questionDataSet[setNumber+1].Questions.length) {
      nextSetNumber += 1;
      nextQuestionNumber = 0;
      
    }
    if(nextSetNumber >= Object.keys(this.questionDataSet).length) {
      this.nextHref = "google.com"
    } else {
      this.nextHref = "#/question/set="+nextSetNumber+"&qsn="+nextQuestionNumber;
    }

    // setting previous button
    let previousSetNumber = setNumber;
    let previousQuestionNumber = questionNumber-1;

    if(previousQuestionNumber<0) {
      previousSetNumber -= 1;
      if(previousSetNumber<0) {
        previousSetNumber = 0;
      }
      let prevSetQuestionLength = this.questionDataSet[previousSetNumber+1].Questions.length;
      previousQuestionNumber = this.questionDataSet[previousSetNumber+1].Questions[prevSetQuestionLength-1]
    }
    this.prevHref = "#/question/set="+previousSetNumber+"&qsn="+previousQuestionNumber;    
  }

}