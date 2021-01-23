import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IItemResponse } from 'src/app/models/IItemResponse';
import { ISearchResponse } from 'src/app/models/ISearchResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  url: string = environment.baseURL;

  constructor(
    private http: HttpClient
  ) { }

  getSearch(query: string): Observable<ISearchResponse> {
    return this.http.get<ISearchResponse>(`${this.url}/items?q=${query}`);
  }

  getItemDetail(id: string): Observable<IItemResponse> {
    return this.http.get<IItemResponse>(`${this.url}/items/${id}`);
  }

}
