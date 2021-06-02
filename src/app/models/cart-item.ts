import { Wine } from './wine';
export class CartItem {
  id: number;
  productId: string;
  productName: string;
  bottleQty: number;
  bottlePrice: number;
  caseQty: number;
  casePrice: number;

  constructor(id: number, wine: Wine, bottleQty = 1, caseQty = 1) {
    this.id = id;
    this.productId = wine.no;
    this.productName = wine.name;
    this.bottleQty = bottleQty;
    this.caseQty = caseQty;
    this.bottlePrice = wine.cost.bottle;
    this.casePrice = wine.cost.case;
  }
}
