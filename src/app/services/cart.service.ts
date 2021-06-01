import { cartUrl } from './../config/api';
import { Wine } from './../models/wine';
import { CartItem } from './../models/catr-item';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}
}
