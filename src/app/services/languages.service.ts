import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Language } from '../interfaces/language';
import { LanguagesResponse } from '../interfaces/responses';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  constructor(private http: HttpClient) { }

  getLanguages(): Observable<Language[]> {
    return this.http.get<LanguagesResponse>('public/languages').pipe(
      map(r => r.data)
    )
  }
}
