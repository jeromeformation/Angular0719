import {Component, OnInit} from '@angular/core';
import {CONST_PRODUCTS, Product} from '../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  private products: Array<Product> = CONST_PRODUCTS;

  /**
   * Définition d'une propriété URL
   */
  public url: string;

  /**
   * Définition d'un booléen pour savoir si l'utilisateur est un admin
   */
  public isAdmin: boolean;

  /**
   * Définition des classes CSS à appliquer
   */
  public classesCss: object;

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
  constructor() {
    this.url = 'https://www.ecosia.org';
    this.isAdmin = true;
    this.changeCssClasses();

    // On initialise le tableau des notes
    this.averages = [];
    // 1. On créé autant d'index qu'il y a de produits
    // 2. Dans chaque index on aura :
    //  - La somme des notes (par défaut 0)
    //  - Le nombre de votes (par défaut 0)
    this.products.forEach(elem => this.averages.push([0, 0]));

    console.log(this.averages);

    // equivalent à : this.averages = this.products.map(() => [0, 0]);
  }

  private changeCssClasses() {
    this.classesCss = {
      'blue-bg': this.isAdmin,
      'teal-text': !this.isAdmin
    };
  }

  ngOnInit() {
  }

  public changeAdmin() {
    this.isAdmin = !this.isAdmin;
    this.changeCssClasses();
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
}
