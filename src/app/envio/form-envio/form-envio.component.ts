import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { TablaClienteService } from 'src/app/cliente/tabla-cliente/tabla-cliente.service';
import { FormEnvioService } from './form-envio.service';


@Component({
  selector: 'app-form-envio',
  templateUrl: './form-envio.component.html',
  styleUrls: ['./form-envio.component.css'],
  providers: [FormEnvioService,TablaClienteService]
})
export class FormEnvioComponent implements OnInit,OnChanges {

  public form: FormGroup;

  public activarF: boolean = false;

  @Output() datoUsuario = new EventEmitter<any>();

  @Input() editUsuario: any;

  public listaEmpleadosActivos: Array<any> = []

  constructor(private formBuilder: FormBuilder, public formService: FormEnvioService, public clienteService: TablaClienteService) { }
  ngOnInit(): void {
    this.consultarEmpleadosActivos()
    this.form = this.formBuilder.group({
      idEnvio: new FormControl(''),
      fechaRegistro: new FormControl('', [Validators.required]),
      fechaEntrada: new FormControl('', [Validators.required]),
      precioEnvio: new FormControl('', [Validators.required, ]),
      fkCliente: new FormControl('', [Validators.required]),
      numeroGuia: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{10}')]),
      bodega: new FormControl('', [Validators.required]),
    });
  }

  public consultarEmpleadosActivos():void {
    this.clienteService.getUsers().subscribe(res => {
      if (res != null) {
        this.listaEmpleadosActivos = res;
      }
    })
  }


  getErrorMessageNumeroGuia() {
    if (this.form.controls['numeroGuia'].hasError('required')) {
      return 'Debes ingresar el tipo de producto';
    }
    if (this.form.controls['numeroGuia'].hasError('pattern')) {
      return 'Numero único alfanumérico de 10 dígitos';
    }
  }

  ngOnChanges() {
    this.consultarEmpleadosActivos()
    if (this.editUsuario != undefined) {
      this.activarF = true;
      this.form = this.formBuilder.group({
        idEnvio: new FormControl(this.editUsuario.idEnvio),
        fechaRegistro: new FormControl(this.editUsuario.fechaRegistro, [Validators.required]),
        fechaEntrada: new FormControl(this.editUsuario.fechaEntrada, [Validators.required]),
        precioEnvio: new FormControl(this.editUsuario.precioEnvio, [Validators.required]),
        fkCliente: new FormControl(this.editUsuario.fkCliente),
        numeroGuia: new FormControl(this.editUsuario.numeroGuia, [Validators.required, Validators.pattern('^[a-zA-Z0-9]{10}')]),
        bodega: new FormControl(this.editUsuario.bodega, [Validators.required]),
      });
    }
  }

  public actualizarUsuario(): void {
    this.formService.updateUser(this.editUsuario.idCliente,this.form.value).subscribe(res => {
      if (res != null) {
        this.editUsuario.bodegaEntrega = res.bodegaEntrega;
        this.editUsuario.placaVehiculo = res.placaVehiculo;
        this.editUsuario.tipoProducto = res.tipoProducto;
        this.editUsuario.cantidadProducto = res.cantidadProducto;
        this.editUsuario.idLogisticaMaritima = res.idLogisticaMaritima
        this.limpiarCampos();
      }
    }, error => {
      console.log(error.error.message)
    })
  }


  getErrorMessageBodega() {
    if (this.form.controls['bodega'].hasError('required')) {
      return 'Debes ingresar una bodega';
    }
  }

  getErrorMessagePrecioEnvio() {
    if (this.form.controls['precioEnvio'].hasError('required')) {
      return 'Debes ingresar el precio';
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
    console.log(this.form.value)
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
