import { Component, OnInit, ViewChild, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Usuario } from 'src/app/model/Usuario';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmDialogComponent, ConfirmDialogModel } from 'src/app/confirm-dialog/confirm-dialog.component';
import { TablaTerrestreService } from './tabla-terrestre.service';

@Component({
  selector: 'app-tabla-terrestre',
  templateUrl: './tabla-terrestre.component.html',
  styleUrls: ['./tabla-terrestre.component.css'],
  providers: [TablaTerrestreService]
})
export class TablaTerrestreComponent implements OnInit, OnChanges {

  public listaUsuarios: Array<any> = new Array<any>();

  displayedColumns: string[] = ['idLogisticaTerrestre', 'puertoEntrega', 'numeroFlota', 'tipoProducto','cantidadProducto', 'opciones'];
  dataSource = new MatTableDataSource<Usuario>(this.listaUsuarios);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private tablaService: TablaTerrestreService, public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  @Input() datoUsuario: Usuario;

  @Output() editUsuario = new EventEmitter<Usuario>()

  ngOnInit(): void {
    this.obtenerUsuarios();
    this.paginator._intl.itemsPerPageLabel = 'Filas por página'
  }

  ngOnChanges() {
    if (this.datoUsuario != null || this.datoUsuario != undefined) {
      this.agregarUsuario(this.datoUsuario);
    }
  }

  public agregarUsuario(u: any): void {
    this.listaUsuarios.push(u)
    this.dataSource = new MatTableDataSource(this.listaUsuarios);
    this.dataSource.paginator = this.paginator;
    this.openSnackBar('Logistica terrestre guardado con exito', 'Exito')
  }

  public obtenerUsuarios(): void {
    this.tablaService.getUsers().subscribe(res => {
      if (res != null) {
        console.log(res);
        this.listaUsuarios = res
        this.dataSource = new MatTableDataSource(this.listaUsuarios);
        this.dataSource.paginator = this.paginator;
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  confirmDialog(data: any): void {
    const message = 'Estas seguro de eliminar la logistica terrestre ' + data.placaVehiculo + '?';

    const dialogData = new ConfirmDialogModel("Confirmar acción", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.eliminarUsuario(data.idCliente);
      }
    });
  }

  public eliminarUsuario(id: number): void {
    this.tablaService.deleteUsers(id).subscribe(res => {
      if (res != null) {
        this.listaUsuarios.splice(this.listaUsuarios.indexOf(res), 1);
        this.dataSource = new MatTableDataSource(this.listaUsuarios);
        this.dataSource.paginator = this.paginator;
        this.openSnackBar('Cliente eliminado correctamente','Exito');
      }
    }, error => {
      console.log(error.error.message)
    })
  }

  public editarUsuario(data: any): void {
    console.log(data)
    this.editUsuario.emit(data)
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
