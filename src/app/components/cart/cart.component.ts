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
      this.bottleTotal = 0;
      this.caseTotal = 0;

      this.cartItems.forEach((item) => {
        if (item.bottleQty !== '') {
          this.bottleTotal = item.bottleQty * item.bottlePrice;
        }
        if (item.caseQty !== '') {
          this.caseTotal = item.caseQty * item.casePrice;
        }
        this.cartTotal += this.bottleTotal + this.caseTotal;
      });
    });
  }
}
