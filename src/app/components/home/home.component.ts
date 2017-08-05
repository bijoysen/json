import { Component } from '@angular/core';

import {MenuComponent} from './../menu/menu.component';
import { ContentComponent } from './../content/content.component';
import {IStarRatingOnClickEvent, IStarRatingOnRatingChangeEven, IStarRatingIOnHoverRatingChangeEvent} from "angular-star-rating";
@Component({
  selector: 'home',
  templateUrl: './home.template.html',
  styleUrls: ['./home.style.css']
})
export class HomeComponent {
  public rating: number;
  constructor() {
    this.rating = 0;
  }
  onClickResult:IStarRatingOnClickEvent;
    onHoverRatingChangeResult:IStarRatingIOnHoverRatingChangeEvent;
    onRatingChangeResult:IStarRatingOnRatingChangeEven;
 
    onClick = ($event:IStarRatingOnClickEvent) => {
        console.log('onClick $event: ', $event);
        this.onClickResult = $event;alert(this.onClickResult.rating);
        this.rating = this.onClickResult.rating;
    };
 
    onRatingChange = ($event:IStarRatingOnRatingChangeEven) => {
        console.log('onRatingUpdated $event: ', $event);
        this.onRatingChangeResult = $event;
    };
 
    onHoverRatingChange = ($event:IStarRatingIOnHoverRatingChangeEvent) => {
        console.log('onHoverRatingChange $event: ', $event);
        this.onHoverRatingChangeResult = $event;
    };
}