import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Province } from '../interfaces/province';
import { ProvincesResponse } from '../interfaces/responses';

@Injectable({
  providedIn: 'root'
})
export class ProvincesService {

  constructor(private http: HttpClient) { }

  getProvinces(): Observable<Province[]> {
    return this.http.get<ProvincesResponse>('public/provinces').pipe(
      map(r => r.data)
    )
  }
}
