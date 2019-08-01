import { Injectable } from '@angular/core';
import {CONST_PRODUCTS, Product} from './model/product';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  /**
   * Récupère les produits de l'API
   */
  public getProducts(): Observable<Array<Product>> {
    return of(CONST_PRODUCTS);
  }
}
