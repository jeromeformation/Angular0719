import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {



  private PRODUCTS = [
    {
      name: 'Hamac',
      description: 'Pour se reposer'
    },
    {
      name: 'Parasol',
      description: 'Pour se mettre à l\'ombre'
    },
    {
      name: 'Ballon',
      description: 'Pour jouer au volley'
    }
  ];

  /**
   * Définition d'une propriété URL
   */
  private url: string;

  /**
   * Définition d'un booléen pour savoir si l'utilisateur est un admin
   */
  private isAdmin: boolean;
  /**
   * Initialisation des propriétés
   */
  constructor() {
    this.url = 'https://www.ecosia.org';
    this.isAdmin = true;
  }

  ngOnInit() {
  }

}
