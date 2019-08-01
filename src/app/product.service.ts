import { Injectable } from '@angular/core';
import { Product } from './model/product';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  /**
   * URL de l'api (le nom du virtualhost)
   */
  private apiURL = 'http://api.partage.local/prodfffffucts';

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

  private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('Erreur front : ', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
          `Erreur de l'API : ${error.status}, ` +
          `contenu: ${error.error}`);
      }
      // return an observable with a user-facing error message
      return throwError(error);
  }
}













