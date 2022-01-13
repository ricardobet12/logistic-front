import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TablaEnvioService {

  maritimaURL = environment.maritimaURL;
  
  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.maritimaURL);
  }

    public deleteUsers(id:number): Observable<any> {
    return this.http.delete<any>(this.maritimaURL + 'eliminar/'+id);
  }

  public updateUser(id: number,usuario:any): Observable<any> {
    return this.http.put<any>(this.maritimaURL +id, usuario);
  }

}
