import { Language } from "./language";
import { Province } from "./province";

export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  province: Province | number;
  language: Language | number;
  profileImage: string;
  birthDate: string;
  email: string;
  password: string;
}
