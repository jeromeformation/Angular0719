import {Component, DoCheck, OnInit} from '@angular/core';
import {Product} from '../model/product';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-view-show',
  templateUrl: './product-view-show.component.html',
  styleUrls: ['./product-view-show.component.scss']
})
export class ProductViewShowComponent implements OnInit, DoCheck {

  /**
   * Produit à afficher
   */
  public product: Product;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {
  }

  /**
   * On charge le product à l'initiatisation
   */
  public ngOnInit() {
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
   * Lorsqu'il y a un changement, on vérifie si l'id a changé (dans l'url),
   * auquel cas on recharge le produit correspond à la nouvelle URL
   */
  public ngDoCheck(): void {
    const data: string|number = this.route.snapshot.paramMap.get('id');
    if (this.product) {
      console.log(data);
      if (+data !== +this.product.id && data !== this.product.slug) {
        this.getProduct();
      }
    }
  }

}
