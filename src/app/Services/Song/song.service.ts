import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongService {


  readonly api:string = `${environment.ApiUrl}/Search/PlayList?`;

  constructor(private http:HttpClient) { }

  getAll(Albumid:number,page:number = 1):Observable<any>{
    if(Albumid == 0){
      var temp = `${this.api}playListId=${environment.AlbumsId}&page=${page}&size=24`
      return this.http.get<any>(temp);
    }else{
      var temp = `${this.api}playListId=${Albumid}&page=${page}&size=24`
      return this.http.get<any>(temp);
    }
  }
}
