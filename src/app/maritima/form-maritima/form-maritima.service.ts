import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/model/Usuario';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FormMaritimaService {
  maritimaURL = environment.maritimaURL;

  constructor(private http: HttpClient) { }

  public saveUser(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.maritimaURL, usuario);
  }

  public updateUser(id: number,usuario:Usuario): Observable<any> {
    return this.http.put<any>(this.maritimaURL +id, usuario);
  }
}
