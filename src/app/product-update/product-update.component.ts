import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: '../product-create/product-create.component.html',
  styleUrls: ['../product-create/product-create.component.scss']
})
export class ProductUpdateComponent implements OnInit {

  public product: Product;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {
  }

  ngOnInit() {
    this.getProduct();
  }

  /**
   * Fonction permettant de récupérer le produit par rapport à l'id de l'URL
   */
  private getProduct(): void {
    // On récupère l'id de la route
    const data = this.route.snapshot.paramMap.get('id');
    // On récupère le produit grâce au service
    this.productService.getProductBy(data).subscribe(product => {
      // On stocke le produit pour l'affichage
      this.product = product;
      // On redirige vers la page 404 si le produit n'a pas été trouvé
      if (!this.product) {
        this.router.navigate(['/not-found']);
      }
    });
  }

  /**
   * Envoi du produit au service
   */
  public sendProductToAPI() {
    console.log(this.product);

    this.productService.update(this.product).subscribe(
      datas => {
        console.log(datas.message);
        if (datas.message === 'Produit bien modifié !') {
          this.router.navigate(['/produits/' + this.product.slug]);
        }
      }
    );
  }
}
