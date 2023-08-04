import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { MenuResponse } from '../interfaces/menu-response';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  constructor( private http: HttpClient) { }

  getMenu():Observable<MenuResponse>{
    return this.http.get<MenuResponse>('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian')
  }
}
