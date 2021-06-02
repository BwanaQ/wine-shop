import { Wine } from './../../models/wine';
import { MessengerService } from './../../services/messenger.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems = [];
  bottleTotal = 0;
  caseTotal = 0;
  cartTotal = 0;
  bottles = 0;
  cases = 0;
  constructor(private msg: MessengerService) {}

  ngOnInit(): void {
    this.msg.getMsg().subscribe((wine: Wine) => {
      console.log(wine);
      this.cartItems.push({
        productName: wine.name,
        bottleQty: wine.bottleQty,
        caseQty: wine.caseQty,
        bottlePrice: wine.cost.bottle,
        casePrice: wine.cost.case,
      });
      console.log('*********CART ITEMS***********');
      console.log(this.cartItems);
      this.bottleTotal = 0;
      this.caseTotal = 0;
      this.cartTotal = 0;
      this.bottles = 0;
      this.cases = 0;

      this.cartItems.forEach((item) => {
        if (item.bottleQty !== '') {
          this.bottleTotal =
            parseInt(item.bottleQty, 10) * parseFloat(item.bottlePrice);
        } else {
          this.bottleTotal = 0;
        }
        if (item.caseQty !== '') {
          this.caseTotal =
            parseInt(item.caseQty, 10) * parseFloat(item.casePrice);
        } else {
          this.caseTotal = 0;
        }
        this.cartTotal += this.bottleTotal + this.caseTotal;
        this.bottles += parseInt(item.bottleQty, 10);
        this.cases += parseInt(item.caseQty, 10);
      });
    });
  }
}
