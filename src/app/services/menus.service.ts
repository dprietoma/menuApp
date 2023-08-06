import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, map } from 'rxjs';
import { MenuResponse } from '../interfaces/menu-response';
import { CategoriaResponse } from '../interfaces/categoria-response';

@Injectable({
  providedIn: 'root'
})
export class MenusService {
  private baseUrl: string = 'https://www.themealdb.com/api/json/v1/1/';


  
  constructor( private http: HttpClient) { }

  getMenu():Observable<MenuResponse>{
    return this.http.get<MenuResponse>(`${this.baseUrl}/filter.php?a=Canadian`)
  }
 
  getCategorias():Observable<CategoriaResponse> {
    return this.http.get<CategoriaResponse>(`${this.baseUrl}/categories.php`)
  }

  getBuscar(txt: string) {
    return this.http.get<MenuResponse>(`${this.baseUrl}/search.php?s=${txt}`)
  }

  getDetalleId(id: string) {
    return this.http.get<MenuResponse>(`${this.baseUrl}/lookup.php?i=${id}`)
  }

  getFiltrarCategoria(txt: string) {
    return this.http.get(`${this.baseUrl}/filter.php?c=${txt}`)
  }
} 
