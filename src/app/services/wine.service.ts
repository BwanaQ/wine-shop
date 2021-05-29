import { Wine } from './../models/wine';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class WineService {
  apiLink = 'https://storage.googleapis.com/wineshop-assets/wine-shop.json';

  constructor(private http: HttpClient) {}
  getWines(): Observable<Wine[]> {
    return this.http.get<Wine[]>(this.apiLink);
  }
}
