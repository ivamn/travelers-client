import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Language } from 'src/app/interfaces/language';
import { Province } from 'src/app/interfaces/province';
import { User } from 'src/app/interfaces/user';
import { LanguagesService } from 'src/app/services/languages.service';
import { ProvincesService } from 'src/app/services/provinces.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User;
  provinces: Province[];
  languages: Language[];

  constructor(
    private authService: AuthService, private languageService: LanguagesService, private provinceService: ProvincesService,
    private router: Router
    ) {
    this.user = { email: '', firstName: '', lastName: '', language: 0, password: '', profileImage: '', province: 0, birthDate: '01/01/2000' };
    this.languages = [];
    this.provinces = [];
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.languageService.getLanguages().subscribe(
      r => this.languages = r
    );

    this.provinceService.getProvinces().subscribe(
      r => this.provinces = r
    );
  }

  submit(): void {
    this.authService.register(this.user).subscribe(
      ok => this.router.navigate(['/auth/login'])
    );
  }

  loadImage(fileInput: HTMLInputElement): void {
    if (!fileInput.files || fileInput.files.length === 0) { return; }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', e => {
      this.user.profileImage = reader.result as string;
    });
  }

}
