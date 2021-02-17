import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from 'src/app/interfaces/review';
import { ReviewsService } from '../services/reviews.service';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.scss']
})
export class ReviewDetailsComponent implements OnInit {

  review!: Review;
  currentUserName: string;

  constructor(private reviewsService: ReviewsService, private route: ActivatedRoute, private router: Router) {
    this.currentUserName = '';
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    if (id) {
      this.reviewsService.getReview(id).subscribe(
        r => {
          this.review = r;
          this.tokenInfo();
        }
      );
    }
  }

  deleteReview(): void {
    this.reviewsService.delete(this.review.id as number).subscribe(
      r => this.router.navigate(['reviews'])
    );
  }

  tokenInfo(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.currentUserName = JSON.parse(atob(token.split('.')[1])).username;
    }
  }

}
