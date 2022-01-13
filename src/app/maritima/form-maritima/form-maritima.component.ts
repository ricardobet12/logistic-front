import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { FormMaritimaService } from './form-maritima.service';

@Component({
  selector: 'app-form-maritima',
  templateUrl: './form-maritima.component.html',
  styleUrls: ['./form-maritima.component.css'],
  providers: [FormMaritimaService]
})
export class FormMaritimaComponent implements OnInit,OnChanges {

  public form: FormGroup;

  public activarF: boolean = false;

  @Output() datoUsuario = new EventEmitter<any>();

  @Input() editUsuario: any;

  constructor(private formBuilder: FormBuilder, public formService: FormMaritimaService) { }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      idLogisticaMaritima: new FormControl(''),
      bodegaEntrega: new FormControl('', [Validators.required]),
      placaVehiculo: new FormControl('', [Validators.required]),
      tipoProducto: new FormControl('', [Validators.required]),
      cantidadProducto: new FormControl('', [Validators.required]),
    });
  }

  ngOnChanges() {
    if (this.editUsuario != undefined) {
      this.activarF = true;
      this.form = this.formBuilder.group({
        idLogisticaMaritima: new FormControl(this.editUsuario.idCliente),
        bodegaEntrega: new FormControl(this.editUsuario.nombre, [Validators.required]),
        placaVehiculo: new FormControl(this.editUsuario.apellido, [Validators.required]),
        tipoProducto: new FormControl(this.editUsuario.telefono, [Validators.required]),
        cantidadProducto: new FormControl(this.editUsuario.correo, [Validators.required]),
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


  getErrorMessageBodegaEntrega() {
    if (this.form.controls['bodegaEntrega'].hasError('required')) {
      return 'Debes ingresar una bodega';
    }
  }

  getErrorMessagePlacaVehiculo() {
    if (this.form.controls['placaVehiculo'].hasError('required')) {
      return 'Debes ingresar la placa del vehiculo';
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
