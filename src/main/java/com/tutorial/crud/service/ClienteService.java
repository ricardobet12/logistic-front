package com.tutorial.crud.service;
import com.tutorial.crud.dto.ClientesDto;

import java.util.List;

public interface ClienteService {

    /**
     * Guarda un cliente
     * @param cliente -> Cliente a guardar
     * @return objeto con el cliente guardado.
     */
    ClientesDto guardarCliente (ClientesDto cliente);

    /**
     * Retorna un cliente de acuerdo a un id
     * @param idCliente -> Id del cliente
     * @return objeto con el cliente consultar
     */
    ClientesDto getCliente (Long idCliente);

    /**
     * Retorna todos los clientes
     * @return lista de clientes almacenados en la base de datos.
     */
    List<ClientesDto> getClientes();

    boolean eliminarUsuario(Long id);

}
