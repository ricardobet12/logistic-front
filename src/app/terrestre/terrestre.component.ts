import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terrestre',
  templateUrl: './terrestre.component.html',
  styleUrls: ['./terrestre.component.css']
})
export class TerrestreComponent implements OnInit {

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
