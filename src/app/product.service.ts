import { Injectable } from '@angular/core';
import { Product } from './model/product';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  /**
   * URL de l'api (le nom du virtualhost)
   */
  private apiURL = 'http://api.partage.local/products';

  constructor(private http: HttpClient) {}

  /**
   * Récupère les produits de l'API
   */
  public getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.apiURL)
      .pipe(
        tap(products => console.log(products.length + ' produits reçus de l\'API')),
        catchError(this.handleError)
      )
    ;
  }
  /**
   * Récupère l'éventuel produit par rapport à l'id envoyé
   */
  public getProductById(id: number): Observable<Product> {
    return this.http
      .get<Product>(this.apiURL + '/' + id)
      .pipe(
        tap(product => console.log('Produit reçu : ' + product.name)),
        catchError(this.handleError)
      )
    ;
  }

  /**
   * Gère les erreurs liées à la communication entre l'API et Angular (HttpClient)
   * @param error - Erreur reçue
   */
  private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        console.error('Erreur front : ', error.error.message);
      } else {
        console.error(
          `Erreur de l'API : ${error.status}, ` +
          `contenu: ${error.error}`);
      }
      // Message dans la console
      return throwError(error);
  }
}













