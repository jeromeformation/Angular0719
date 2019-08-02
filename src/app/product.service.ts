import { Injectable } from '@angular/core';
import { Product } from './model/product';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import {ResponseApi} from './model/response-api';
import * as slug from 'slug';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  /**
   * URL de l'api (le nom du virtualhost)
   */
  private apiURL = 'http://api.partage.local/products';

  /**
   * Headers pour l'envoi de données
   */
  private JSONHeaders = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

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
  public getProductBy(data: string): Observable<Product|null> {
    return this.http
      .get<Product>(this.apiURL + '/' + data)
      .pipe(
        tap(product => console.log('Produit reçu : ' + product.name)),
        catchError(
    (error: HttpErrorResponse) => {
              if (error.status === 404) {
                // Si c'est une 404 => le produit n'a été trouvé
                return of(null);
              } else {
                // Sinon, on gère l'erreur comme d'habitude
                this.handleError(error);
            }
          }
        )
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

  /**
   * Envoi du produit à l'API pour l'insertion en BDD
   */
  public create(product: Product): Observable<ResponseApi> {

    // Création du slug
    product.updateSlug();

    return this.http.post<ResponseApi>(this.apiURL, product, this.JSONHeaders).pipe(
      tap(datas => console.log('Retour API (creation produit)')),
      tap(datas => console.log(datas))
    );
  }

  /**
   * Supprime un produit grâce à son id
   */
  public delete(id: number): Observable<ResponseApi> {
    return this.http
      .delete<ResponseApi>(this.apiURL + '/' + id, this.JSONHeaders)
      .pipe(
        tap(datas => console.log('Retour API (suppression produit)')),
        tap(datas => console.log(datas))
      )
      ;
  }

  /**
   * Envoi du produit à l'API pour l'insertion en BDD
   */
  public update(product: Product): Observable<ResponseApi> {

    // Création du slug
    product.slug = slug(product.name, {lower: true});

    return this.http.put<ResponseApi>(this.apiURL, product, this.JSONHeaders).pipe(
      tap(datas => console.log('Retour API (creation produit)')),
      tap(datas => console.log(datas))
    );
  }
}













