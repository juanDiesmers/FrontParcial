import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Celular } from '../models/celular';  // Asegúrate de que la ruta sea correcta

@Injectable({
  providedIn: 'root'
})
export class CelularService {

  private baseUrl = 'http://localhost:8080/api/celulares';

  constructor(private http: HttpClient) { }

  getCelulares(): Observable<Celular[]> {
    return this.http.get<Celular[]>(`${this.baseUrl}`);
  }

  getCelular(id: number): Observable<Celular> {
    return this.http.get<Celular>(`${this.baseUrl}/${id}`);
  }

  createCelular(celular: Celular): Observable<Celular> {
    return this.http.post<Celular>(this.baseUrl, celular);
  }

  updateCelular(id: number, celular: Celular): Observable<Celular> {
    return this.http.put<Celular>(`${this.baseUrl}/${id}`, celular);
  }

  deleteCelular(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
