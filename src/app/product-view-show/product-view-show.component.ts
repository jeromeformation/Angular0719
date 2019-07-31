import {Component, DoCheck, OnInit} from '@angular/core';
import {CONST_PRODUCTS, Product} from '../model/product';
import {ActivatedRoute, Router} from '@angular/router';

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

  constructor(private route: ActivatedRoute, private router: Router) {
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
    const id: number = +this.route.snapshot.paramMap.get('id');
    // On filtre notre tableau local pour trouver le produit correspond à l'id
    this.product = CONST_PRODUCTS.find(elem => elem.id === id);
    // On redirige vers la page 404 si le produit n'a pas été trouvé
    if (!this.product) {
      this.router.navigate(['/not-found']);
    }
  }

  /**
   * Lorsqu'il y a un changement, on vérifie si l'id a changé (dans l'url),
   * auquel cas on recharge le produit correspond à la nouvelle URL
   */
  public ngDoCheck(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');
    if (id !== this.product.id) {
      this.getProduct();
    }
  }

}
