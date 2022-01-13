package com.tutorial.crud.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ClientesDto {

    private Long idCliente;
    private String nombre;
    private String apellido;
    private String telefono;
    private String correo;

}
