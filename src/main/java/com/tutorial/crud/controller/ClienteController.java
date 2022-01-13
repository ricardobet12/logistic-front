package com.tutorial.crud.controller;

import com.tutorial.crud.dto.ClientesDto;
import com.tutorial.crud.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/clientes")
@CrossOrigin(origins = "*")
public class ClienteController {

    @Autowired
    private ClienteService service;

    /**
     * metodo para listar todos los usuario de la base de datos.
     *
     * @return lista de usuarios guardados en la base de datos
     */
    @GetMapping("/")
    public ResponseEntity<?> listarTodos() {
        return ResponseEntity.ok(service.getClientes());
    }

    /**
     * Servicio para obtener a un cliente por su id.
     * @param id id del cliente
     * @return objeto con la información del cliente
     */
    @GetMapping("/{id}")
    public ResponseEntity<?> obtenerCliente(@PathVariable("id") Long id) {
        ClientesDto cliente = service.getCliente(id);
        if (cliente == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(cliente);
    }

    /**
     * Metodo para insertar un cliente en la base de datos.
     * @param cliente datos del cliente
     * @return objeto con los datos del clientes ya almacenados
     */
    @PostMapping
    public ResponseEntity<?> insertarCliente(@RequestBody ClientesDto cliente) {
        cliente = service.guardarCliente(cliente);
        if (cliente == null) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(cliente);
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable("id") Long id){
        boolean usuario = service.eliminarUsuario(id);
        if(usuario == true){
            return ResponseEntity.ok(usuario);
        }
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateUsuario(@PathVariable("id") Long id, @RequestBody ClientesDto u){
        ClientesDto p = service.getCliente(id);
        if(p == null){
            return ResponseEntity.noContent().build();
        }
        p = service.guardarCliente(u);
        if(p == null){
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(p);
    }

}
