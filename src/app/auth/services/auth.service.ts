import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { TokenResponse, UserResponse } from 'src/app/interfaces/responses';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logged: boolean;

  constructor(private http: HttpClient) {
    this.logged = false;
  }

  login(username: string, password: string): Observable<void> {
    return this.http.post<TokenResponse>('login', { username, password }).pipe(
      map(token => {
        localStorage.token = token.token;
      })
    )
  }

  register(user: User): Observable<User> {
    return this.http.post<UserResponse>('register', user).pipe(
      map(r => r.data)
    );
  }

  validate(): Observable<string> {
    return this.http.get<string>('validate').pipe(
      catchError(() => {
        console.log(3);
        return throwError('Not valid');
      })
    );
  }

  logout(): void {
    this.logged = false;
    localStorage.removeItem('token');
  }

  isLogged(): Observable<boolean> {
    const token = localStorage.getItem('token');
    if (!this.logged && token) {
      return this.validate().pipe(
        map(r => {
          this.logged = true;
          return true;
        }),
        catchError(error => {
          console.log('LMAOO');
          localStorage.removeItem('token');
          return of(false);
        })
      );
    } else {
      return of(this.logged);
    }
  }
}
