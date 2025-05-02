import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Superhero } from './model/superhero.model';

interface SuperheroResponse {
  response: 'success' | 'error';
  results: Superhero[];
  error: string;
}

@Injectable({
  providedIn: 'root'
})
export class SuperheroHttpService {

  apiUrl = `http://localhost:3333/heroes`;

  constructor(private http: HttpClient) {}

  getSearchResult(name: string): Observable<Superhero[]> {
    return this.http.get<SuperheroResponse>(`${this.apiUrl}/search/${name}`)
      .pipe(
        map(response => {
          if (response.response === 'success' ) {
            return response.results;
          }
          console.log(response.error);
          return [];
        }),
        catchError((err) => {
          console.log('Something happened: ', err);
          return of([]);
        })
      );
  }
}