import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TablaMaritinaService {

  maritimaURL = environment.maritimaURL;
  
  constructor(private http: HttpClient) { }

  public getUsers(): Observable<Usuario[]> {
    return this.http.get<any[]>(this.maritimaURL);
  }

    public deleteUsers(id:number): Observable<Usuario> {
    return this.http.delete<Usuario>(this.maritimaURL + 'eliminar/'+id);
  }

  public updateUser(id: number,usuario:Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(this.maritimaURL +id, usuario);
  }

}
