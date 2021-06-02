import { MessengerService } from './../../../services/messenger.service';
import { Wine } from './../../../models/wine';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() wine: Wine;
  addQuantity: FormGroup;
  constructor(private msg: MessengerService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addQuantity = this.fb.group({
      bottleQty: [''],
      caseQty: [''],
    });
  }
  handleAddToCart(bottleQty, caseQty) {
    this.wine.bottleQty = bottleQty;
    this.wine.caseQty = caseQty;
    this.msg.sendMsg(this.wine);
  }
}
