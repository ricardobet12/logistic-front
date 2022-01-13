import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TablaTerrestreService {

  terrestreURL = environment.terrestreURL;
  
  constructor(private http: HttpClient) { }

  public getUsers(): Observable<Usuario[]> {
    return this.http.get<any[]>(this.terrestreURL);
  }

    public deleteUsers(id:number): Observable<Usuario> {
    return this.http.delete<Usuario>(this.terrestreURL + 'eliminar/'+id);
  }

  public updateUser(id: number,usuario:Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(this.terrestreURL +id, usuario);
  }

}