import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductoComponent } from './producto/lista-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto.component';
import { EditarProductoComponent } from './producto/editar-producto.component';
import { interceptorProvider } from './interceptors/prod-interceptor.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { SendEmailComponent } from './changepassword/send-email.component';
import { ChangePasswordComponent } from './changepassword/change-password.component';
import { ClienteComponent } from './cliente/cliente.component';
import { FormClienteComponent } from './cliente/form-cliente/form-cliente.component';
import { TablaClienteComponent } from './cliente/tabla-cliente/tabla-cliente.component';
import { MaterialModule } from './material';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TerrestreComponent } from './terrestre/terrestre.component';
import { MaritimaComponent } from './maritima/maritima.component';
import { EnvioComponent } from './envio/envio.component';
import { TablaMaritinaComponent } from './maritima/tabla-maritina/tabla-maritina.component';
import { FormMaritimaComponent } from './maritima/form-maritima/form-maritima.component';



@NgModule({
  declarations: [
    AppComponent,
    ListaProductoComponent,
    ClienteComponent,
    DetalleProductoComponent,
    NuevoProductoComponent,
    EditarProductoComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    IndexComponent,
    SendEmailComponent,
    ChangePasswordComponent,
    ClienteComponent,
    FormClienteComponent,
    TablaClienteComponent,
    ConfirmDialogComponent,
    TerrestreComponent,
    MaritimaComponent,
    EnvioComponent,
    TablaMaritinaComponent,
    FormMaritimaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
