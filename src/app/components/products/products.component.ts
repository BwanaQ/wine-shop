import { Wine } from './../../models/wine';
import { WineService } from './../../services/wine.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  wines: Wine[];
  constructor(private wService: WineService) {}

  ngOnInit(): void {
    this.getWines();
  }
  // tslint:disable-next-line: typedef
  getWines() {
    this.wService.getWines().subscribe((wines) => {
      this.wines = wines;
      console.log('wines: ' + this.wines);
    });
  }
}
