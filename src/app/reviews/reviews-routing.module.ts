import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from '../guards/login.guard';
import { ReviewDetailsComponent } from './review-details/review-details.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { ReviewsPageComponent } from './reviews-page/reviews-page.component';

const routes: Routes = [
  {path: 'edit/:id', component: ReviewFormComponent, canActivate: [LoginGuard]},
  {path: 'add', component: ReviewFormComponent, canActivate: [LoginGuard]},
  {path: ':id', component: ReviewDetailsComponent, canActivate: [LoginGuard]},
  {path: '', component: ReviewsPageComponent, canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewsRoutingModule { }
