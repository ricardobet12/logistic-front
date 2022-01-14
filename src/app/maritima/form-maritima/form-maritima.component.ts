import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { TablaEnvioService } from 'src/app/envio/tabla-envio/tabla-envio.service';
import { FormMaritimaService } from './form-maritima.service';

@Component({
  selector: 'app-form-maritima',
  templateUrl: './form-maritima.component.html',
  styleUrls: ['./form-maritima.component.css'],
  providers: [FormMaritimaService,TablaEnvioService]
})
export class FormMaritimaComponent implements OnInit,OnChanges {

  public form: FormGroup;

  public activarF: boolean = false;

  @Output() datoUsuario = new EventEmitter<any>();

  @Input() editUsuario: any;

  public listaEmpleadosActivos: Array<any> = []

  constructor(private formBuilder: FormBuilder, public formService: FormMaritimaService, public envioService: TablaEnvioService) { }
  ngOnInit(): void {
    this.consultarEmpleadosActivos()
    this.form = this.formBuilder.group({
      idLogisticaMaritima: new FormControl(''),
      bodegaEntrega: new FormControl('', [Validators.required]),
      placaVehiculo: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]{3}\[0-9]{3}$')]),
      tipoProducto: new FormControl('', [Validators.required]),
      fkEnvio: new FormControl(''),
      cantidadProducto: new FormControl('', [Validators.required]),
    });
  }

  public consultarEmpleadosActivos():void {
    this.envioService.getUsers().subscribe(res => {
      if (res != null) {
        this.listaEmpleadosActivos = res;
      }
    })
  }

  ngOnChanges() {
    this.consultarEmpleadosActivos()
    if (this.editUsuario != undefined) {
      this.activarF = true;
      this.form = this.formBuilder.group({
        idLogisticaMaritima: new FormControl(this.editUsuario.idLogisticaMaritima),
        bodegaEntrega: new FormControl(this.editUsuario.bodegaEntrega, [Validators.required]),
        placaVehiculo: new FormControl(this.editUsuario.placaVehiculo, [Validators.required,  Validators.pattern('^[a-zA-Z]{3}\[0-9]{3}$')]),
        tipoProducto: new FormControl(this.editUsuario.tipoProducto, [Validators.required]),
        fkEnvio: new FormControl(this.editUsuario.fkEnvio != null ? this.editUsuario.fkEnvio.numeroGuia : null),
        cantidadProducto: new FormControl(this.editUsuario.cantidadProducto, [Validators.required]),
      });
    }
  }

  public actualizarUsuario(): void {
    this.formService.updateUser(this.editUsuario.idLogisticaMaritima,this.form.value).subscribe(res => {
      if (res != null) {
        this.editUsuario.bodegaEntrega = res.bodegaEntrega;
        this.editUsuario.placaVehiculo = res.placaVehiculo;
        this.editUsuario.tipoProducto = res.tipoProducto;
        this.editUsuario.cantidadProducto = res.cantidadProducto;
        this.editUsuario.idLogisticaMaritima = res.idLogisticaMaritima
        this.editUsuario.fkEnvio = res.fkEnvio
        this.limpiarCampos();
      }
    }, error => {
      console.log(error.error.message)
    })
  }


  getErrorMessageBodegaEntrega() {
    if (this.form.controls['bodegaEntrega'].hasError('required')) {
      return 'Debes ingresar una bodega';
    }
  }

  getErrorMessagePlacaVehiculo() {
    if (this.form.controls['placaVehiculo'].hasError('required')) {
      return 'Debes ingresar la placa del vehiculo';
    }
    if (this.form.controls['placaVehiculo'].hasError('pattern')) {
      return 'Debe tener 3 letras iniciales y 3 números finales';
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

