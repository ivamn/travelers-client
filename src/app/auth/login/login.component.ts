import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) {
    this.username = '';
    this.password = '';
  }

  ngOnInit(): void {
  }

  submit(): void {
    this.authService.login(this.username, this.password).subscribe(
      ok => this.router.navigate(['/reviews'])
    );
  }

}
