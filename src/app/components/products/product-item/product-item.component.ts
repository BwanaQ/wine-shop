import { MessengerService } from './../../../services/messenger.service';
import { Wine } from './../../../models/wine';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() wine: Wine;

  constructor(private msg: MessengerService) {}

  ngOnInit(): void {}
}
