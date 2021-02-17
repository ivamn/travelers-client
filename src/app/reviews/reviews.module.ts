import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsRoutingModule } from './reviews-routing.module';
import { ReviewCardComponent } from './review-card/review-card.component';
import { ReviewsPageComponent } from './reviews-page/reviews-page.component';
import { ReviewDetailsComponent } from './review-details/review-details.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { PipesModule } from '../pipes/pipes.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ReviewCardComponent, ReviewsPageComponent, ReviewDetailsComponent, ReviewFormComponent],
  imports: [
    CommonModule,
    ReviewsRoutingModule,
    PipesModule,
    FormsModule
  ]
})
export class ReviewsModule { }
