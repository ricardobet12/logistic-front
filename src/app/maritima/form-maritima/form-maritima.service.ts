import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FormMaritimaService {
  maritimaURL = environment.maritimaURL;

  constructor(private http: HttpClient) { }

  public saveUser(usuario: any): Observable<any> {
    return this.http.post<any>(this.maritimaURL, usuario);
  }

  public updateUser(id: number,usuario:any): Observable<any> {
    return this.http.put<any>(this.maritimaURL +id, usuario);
  }
}
