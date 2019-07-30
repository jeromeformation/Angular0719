import { Component, OnInit } from '@angular/core';
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
   * Initialisation des propriétés
   */
  constructor() {
    this.url = 'https://www.ecosia.org';
    this.isAdmin = true;
    this.changeCssClasses();
  }

  private changeCssClasses() {
    this.classesCss = {
      'blue-bg' : this.isAdmin,
      'teal-text' : !this.isAdmin
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
  }
}
