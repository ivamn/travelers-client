import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ReviewResponse, ReviewsResponse } from 'src/app/interfaces/responses';
import { Review } from 'src/app/interfaces/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http: HttpClient) { }

  getReviews(): Observable<Review[]> {
    return this.http.get<ReviewsResponse>('reviews').pipe(
      map(r => r.data)
    );
  }

  getReview(id: number): Observable<Review> {
    return this.http.get<ReviewResponse>(`reviews/${id}`).pipe(
      map(r => r.data)
    );
  }

  addReview(review: Review): Observable<Review> {
    return this.http.post<ReviewResponse>('reviews', review).pipe(
      map(r => r.data)
    );
  }

  editReview(review: Review): Observable<Review> {
    return this.http.put<ReviewResponse>(`reviews/${review.id}`, review).pipe(
      map(r => r.data)
    );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`reviews/${id}`);
  }
}
