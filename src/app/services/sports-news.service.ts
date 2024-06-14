import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private http = inject(HttpClient);
  private apiUrl = 'https://newsapi.org/v2/everything'; // Actualiza esto con tu API real
  private apiKey = 'e7493892f4d24c76a5c8357e62c27c5c'; // Reemplaza con tu API Key de NewsAPI
  
  constructor() {}

  getNewsByCategory(category: string, page: number = 1): Observable<any> {
    const url = `${this.apiUrl}?q=${category}&page=${page}&language=es&apiKey=${this.apiKey}`;
    return this.http.get<any>(url).pipe(
      map(data => {
        return data;
      }),
      catchError(error => {
        console.error('Error fetching data', error);
        return throwError(() => new Error('Error fetching data'));
      })
    );
  }
}

