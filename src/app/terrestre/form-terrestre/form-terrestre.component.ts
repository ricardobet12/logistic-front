import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { TablaEnvioService } from 'src/app/envio/tabla-envio/tabla-envio.service';
import { FormTerrestreService } from './form-terrestre.service';

@Component({
  selector: 'app-form-terrestre',
  templateUrl: './form-terrestre.component.html',
  styleUrls: ['./form-terrestre.component.css'],
  providers: [FormTerrestreService,TablaEnvioService]
})
export class FormTerrestreComponent implements OnInit,OnChanges {

  public form: FormGroup;

  public activarF: boolean = false;

  @Output() datoUsuario = new EventEmitter<any>();

  @Input() editUsuario: any;

  public listaEmpleadosActivos: Array<any> = []

  constructor(private formBuilder: FormBuilder, public formService: FormTerrestreService, public envioService: TablaEnvioService) { }
  ngOnInit(): void {
    this.consultarEmpleadosActivos()
    this.form = this.formBuilder.group({
      idLogisticaTerrestre: new FormControl(''),
      puertoEntrega: new FormControl('', [Validators.required]),
      numeroFlota: new FormControl('', [Validators.required,  Validators.pattern('^[a-zA-Z]{3}\[0-9]{4}\[a-zA-Z]{1}$')]),
      tipoProducto: new FormControl('', [Validators.required]),
      fkEnvio: new FormControl(null),
      cantidadProducto: new FormControl('', [Validators.required]),
    });
  }

  ngOnChanges() {
    this.consultarEmpleadosActivos()
    if (this.editUsuario != undefined) {
      this.activarF = true;
      this.form = this.formBuilder.group({
        idLogisticaTerrestre: new FormControl(this.editUsuario.idLogisticaTerrestre),
        puertoEntrega: new FormControl(this.editUsuario.puertoEntrega, [Validators.required]),
        numeroFlota: new FormControl(this.editUsuario.numeroFlota, [Validators.required,  Validators.pattern('^[a-zA-Z]{3}\[0-9]{4}\[a-zA-Z]{1}$')]),
        tipoProducto: new FormControl(this.editUsuario.tipoProducto, [Validators.required]),
        fkEnvio: new FormControl(this.editUsuario.fkEnvio != null ? this.editUsuario.fkEnvio.numeroGuia : null),
        cantidadProducto: new FormControl(this.editUsuario.cantidadProducto, [Validators.required]),
      });
    }
  }

  public consultarEmpleadosActivos():void {
    this.envioService.getUsers().subscribe(res => {
      if (res != null) {
        this.listaEmpleadosActivos = res;
      }
    })
  }

  public actualizarUsuario(): void {
    this.formService.updateUser(this.editUsuario.idLogisticaTerrestre,this.form.value).subscribe(res => {
      if (res != null) {
        this.editUsuario.puertoEntrega = res.bodegaEntrega;
        this.editUsuario.numeroFlota = res.placaVehiculo;
        this.editUsuario.tipoProducto = res.tipoProducto;
        this.editUsuario.cantidadProducto = res.cantidadProducto;
        this.editUsuario.idLogisticaTerrestre = res.idLogisticaMaritima
        this.editUsuario.fkEnvio = res.fkEnvio
        this.limpiarCampos();
      }
    }, error => {
      console.log(error.error.message)
    })
  }


  getErrorMessageBodegaEntrega() {
    if (this.form.controls['puertoEntrega'].hasError('required')) {
      return 'Debes ingresar un puerto de entrega';
    }
  }

  getErrorMessagePlacaVehiculo() {
    if (this.form.controls['numeroFlota'].hasError('required')) {
      return 'Debes ingresar un numero de flota';
    }
    if (this.form.controls['numeroFlota'].hasError('pattern')) {
      return 'Debe corresponder a 3 letras iniciales, seguidas de 4 números y finalizando con una letra';
    }
  }

  getErrorMessageTipoProducto() {
    if (this.form.controls['tipoProducto'].hasError('required')) {
      return 'Debes ingresar el tipo de producto';
    }
  }

  getErrorMessageCantidadProductos() {
    if (this.form.controls['cantidadProducto'].hasError('required')) {
      return 'Debes ingresar la cantidad de productos';
    }
  }

  public limpiarCampos(): void {
    this.form.reset()
  }

  public prueba(): void {
    if (this.editUsuario != undefined) {
      this.actualizarUsuario();
    }else {
      this.guardarUsuario();
    }
  }

  
  public guardarUsuario(): void {
    this.formService.saveUser(this.form.value).subscribe(res => {
      if (res != null) {
        console.log(res)
        this.datoUsuario.emit(res);
        this.limpiarCampos();
      }
    }, error => {
      console.log(error.error.message)
    })
  }

  public activarForm(): void {
    this.form.reset();
    this.editUsuario = null;
    this.activarF = true;
  }


}
