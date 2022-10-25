import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  readonly api = `${environment.ApiUrl}/Home/GetSuggestedPlayLists?page=1&size=12`;
  constructor(private http:HttpClient) { }


  getAll():Observable<any>{
    return this.http.get<any>(this.api);
  }
}
