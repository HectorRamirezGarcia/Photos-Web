import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  private baseUrl = 'https://localhost:3000'; // URL del servidor API

  constructor(private http: HttpClient) {}

  // Método para obtener las carpetas de años
  getYearsFolders(): Observable<string[]> {
    const url = `${this.baseUrl}/years`; // '/years' ruta servidor API
    return this.http.get<string[]>(url).pipe(
      catchError((error: any) => {
        console.error('Error fetching years folders:', error);
        return [];
      })
    );
  }

  // Método para obtener las fotos de una carpeta específica
  getPhotosInYearFolder(year: string): Observable<string[]> {
    const url = `${this.baseUrl}/years/${year}/`; // '/years' ruta del servidor API
    return this.http.get<string[]>(url).pipe(
      catchError((error: any) => {
        console.error('Error fetching photos for year:', error);
        return [];
      })
    );
  }
}
