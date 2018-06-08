import { Injectable } from '@angular/core';
import { fooditem } from './fooditem';
import { Foodlist } from './mock-foodlist';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

    private foodUrl = 'api/Foodlist'

    constructor( private http: HttpClient){ }

  
  
    getFood (): Observable<fooditem[]> {
      return this.http.get<fooditem[]>(this.foodUrl).pipe(
        catchError(this.handleError('getFood', []))
      );
    }



    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
   
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
   
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }


    searchFoodItem(term: string): Observable<fooditem[]> {
      if (!term.trim()) {
       
        return of([]);
      }
      return this.http.get<fooditem[]>(`${this.foodUrl}/?name=${term}`).pipe(
        
        catchError(this.handleError<fooditem[]>('searchFoodItem', []))
      );

    }
 
}
