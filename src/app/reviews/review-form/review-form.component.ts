import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/interfaces/category';
import { Country } from 'src/app/interfaces/country';
import { Review } from 'src/app/interfaces/review';
import { CategoriesService } from 'src/app/services/categories.service';
import { CountriesService } from 'src/app/services/countries.service';
import { ReviewsService } from '../services/reviews.service';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit {

  isNew: boolean;
  categories: Category[];
  countries: Country[];
  review: Review;
  imageChanged: boolean;

  constructor(
    private route: ActivatedRoute, private reviewsService: ReviewsService, private categoriesService: CategoriesService,
    private countriesService: CountriesService, private router: Router
  ) {
    this.imageChanged = false;
    this.isNew = true;
    this.categories = [];
    this.countries = [];
    this.review = { title: '', description: '', image: '', content: '', category: 0, country: 0 };
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    if (id) {
      this.isNew = false;
      this.loadReview(id);
    }
    this.loadData();
  }

  loadReview(id: number): void {
    this.reviewsService.getReview(id).subscribe(
      r => this.review = {
        ...r,
        category: (r.category as Category).id as number,
        country: (r.country as Country).id as number
      }
    );
  }

  loadData(): void {
    this.countriesService.getCountries().subscribe(
      r => this.countries = r
    );
    this.categoriesService.getCategories().subscribe(
      r => this.categories = r
    );
  }

  loadImage(fileInput: HTMLInputElement): void {
    if (!fileInput.files || fileInput.files.length === 0) { return; }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', e => {
      this.review.image = reader.result as string;
      this.imageChanged = true;
    });
  }

  submit(): void {
    if (!this.imageChanged) {
      this.review.image = undefined;
    }
    if (this.isNew) {
      this.reviewsService.addReview(this.review).subscribe(
        r => this.router.navigate(['/reviews', r.id])
      );
    } else {
      this.reviewsService.editReview(this.review).subscribe(
        r => this.router.navigate(['/reviews', r.id])
      );
    }
  }
}
