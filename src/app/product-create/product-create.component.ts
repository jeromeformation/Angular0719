import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';
import {MatSlideToggleChange} from '@angular/material';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  /**
   * Produit à sauvegarder en BDD
   */
  public product: Product;

  constructor(private productService: ProductService) {
    this.product = new Product();
  }

  ngOnInit() {
  }

  /**
   * Envoi du produit à l'API pour le sauvegarder
   */
  public sendProduct(): void {
    this.product.createdAt = new Date();
  }

  public changeIsPublished($event: MatSlideToggleChange) {
    this.product.isPublished = $event.checked;
  }

  /**
   * Envoi du produit au service
   */
  public sendProductToAPI() {
    this.productService.create(this.product).subscribe(
      datas => console.log('[retour API] : ' + datas.message)
    );
  }
}











