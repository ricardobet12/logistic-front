package com.tutorial.crud.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "clientes")
public class Clientes implements Serializable {

    /**
     * id del cliente.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id_cliente")
    private Long idCliente;

    /**
     * nombre del cliente.
     */
    @Column(name = "nombre")
    private String nombre;

    /**
     * Apellido del cliente.
     */
    @Column(name = "apellido")
    private String apellido;

    /**
     * Telefono del cliente.
     */
    @Column(name = "telefono")
    private String telefono;

    /**
     * Correo del cliente.
     */
    @Column(name = "correo")
    private String correo;


}
