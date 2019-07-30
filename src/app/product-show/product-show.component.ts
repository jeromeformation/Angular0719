import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../model/product';

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.scss']
})
export class ProductShowComponent implements OnInit {

  /**
   * Le produit envoyé par le parent
   */
  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
