import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';
import {MatSlideToggleChange} from '@angular/material';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent {

  /**
   * Produit à sauvegarder en BDD
   */
  public product: Product;

  constructor(private productService: ProductService, private router: Router) {
    this.product = new Product();
  }

  public changeIsPublished($event: MatSlideToggleChange) {
    this.product.isPublished = $event.checked;
  }

  /**
   * Envoi du produit au service
   */
  public sendProductToAPI() {
    this.productService.create(this.product).subscribe(
      datas => {
        console.log(datas.message);
        if (datas.message === 'Produit bien créé !') {
          this.router.navigate(['/produits/' + this.product.slug]);
        }
      }
    );
  }
}









