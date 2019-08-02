import {Component, OnInit} from '@angular/core';
import {Product} from '../model/product';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  private products: Array<Product> = [];

  /**
   * Le produit sélectionné
   */
  public choosenProduct: Product;

  /**
   * Tableau des moyennes de votes
   */
  public averages: Array<Array<number>>;

  /**
   * Initialisation des propriétés
   */
  constructor(private productService: ProductService) {
  }

  /**
   * On récupère les produits grâce à l'Observable du service des produits
   */
  ngOnInit() {
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;

        // On initialise le tableau des notes
        this.averages = [];
        // 1. On créé autant d'index qu'il y a de produits
        // 2. Dans chaque index on aura :
        //  - La somme des notes (par défaut 0)
        //  - Le nombre de votes (par défaut 0)
        this.products.forEach(elem => this.averages.push([0, 0]));
        // equivalent à : this.averages = this.products.map(() => [0, 0]);
      }
    );
  }

  public handleVote(note: number) {
    console.log('[list] Nouveau vote : ' + note);

    let index;
    const lgth = this.products.length;

    for (let i = 0; i < lgth; i++) {
      if (this.choosenProduct.name === this.products[i].name) {
        index = i;
        break;
      }
    }

    // Ajouter la note à l'ancienne somme des notes
    this.averages[index][0] += note;
    // Augmenter le nombre des notes
    this.averages[index][1]++;

    console.log('Données pour les notes de ' + this.choosenProduct.name + ' : ' + this.averages[index]);
  }

  getAverage(index: number) {
    if (this.averages[index][1] !== 0) {
      return this.averages[index][0] / this.averages[index][1];
    } else {
      return 0;
    }
  }

  public deleteProduct(product: Product) {
    this.productService.delete(product.id).subscribe(
      datas => {
        console.log(datas.message);

        //// On supprime le product dans le tableau local
        // On cherche son index dans le tableau
        const index = this.products.findIndex(elem => elem.id === product.id);
        console.log(index);
        // On supprime l'élément dans le tableau grâce à son index
        this.products.splice(index, 1);
      }
    );
  }
}
