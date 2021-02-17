import { Category } from "./category";
import { Country } from "./country";
import { User } from "./user";

export interface Review {
  id?: number;
  title: string;
  description: string;
  image?: string;
  content: string;
  author?: User;
  date?: string;
  category: Category | number;
  country: Country | number;
}
