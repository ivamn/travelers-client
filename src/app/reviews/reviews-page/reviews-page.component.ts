import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/interfaces/review';
import { ReviewsService } from '../services/reviews.service';

@Component({
  selector: 'app-reviews-page',
  templateUrl: './reviews-page.component.html',
  styleUrls: ['./reviews-page.component.scss']
})
export class ReviewsPageComponent implements OnInit {

  reviews: Review[];

  constructor(private reviewsService: ReviewsService) {
    this.reviews = [];
  }

  ngOnInit(): void {
    this.reviewsService.getReviews().subscribe(
      r => this.reviews = r
    );
  }

}
