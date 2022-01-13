import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormEnvioService {

  maritimaURL = environment.maritimaURL;

  constructor(private http: HttpClient) { }

  public saveUser(usuario: any): Observable<any> {
    return this.http.post<any>(this.maritimaURL, usuario);
  }

  public updateUser(id: number,usuario:any): Observable<any> {
    return this.http.put<any>(this.maritimaURL +id, usuario);
  }
}