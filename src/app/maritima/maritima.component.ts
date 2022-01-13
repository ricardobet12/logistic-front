import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-maritima',
  templateUrl: './maritima.component.html',
  styleUrls: ['./maritima.component.css']
})
export class MaritimaComponent implements OnInit {

  public datoUsuario: any;

  public editUsuario: any

  constructor() { }

  ngOnInit(): void {
  }

  enviarUsuario(event): void {
    this.datoUsuario = event;
  }

  editarUsuario(event): void {
    this.editUsuario = event;
  }


}
