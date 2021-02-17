import { Category } from "./category";
import { Country } from "./country";
import { Language } from "./language";
import { Province } from "./province";
import { Review } from "./review";
import { User } from "./user";

export interface ReviewsResponse {
  data: Review[];
}

export interface ReviewResponse {
  data: Review;
}

export interface TokenResponse {
  token: string;
}

export interface CountriesResponse {
  data: Country[];
}

export interface CategoriesResponse {
  data: Category[];
}

export interface LanguagesResponse {
  data: Language[];
}

export interface ProvincesResponse {
  data: Province[];
}

export interface UserResponse {
  data: User;
}
