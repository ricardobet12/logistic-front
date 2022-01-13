package com.tutorial.crud.service.impl;

import com.tutorial.crud.dto.ClientesDto;
import com.tutorial.crud.entity.Clientes;
import com.tutorial.crud.exceptions.responses.BadRequestException;
import com.tutorial.crud.repository.ClienteRepository;
import com.tutorial.crud.service.ClienteService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ClienteServiceImpl implements ClienteService {

    @Autowired
    private ClienteRepository repository;

    private final ModelMapper mapper = new ModelMapper();

    @Override
    public ClientesDto guardarCliente(ClientesDto cliente) {
        ClientesDto sh = mapper.map(repository.save(mapper.map(cliente,Clientes.class)),ClientesDto.class);
        return sh;
    }


    @Override
    public ClientesDto getCliente(Long idCliente) {
        Optional<Clientes> clienteOptional = repository.findById(idCliente);
        if (clienteOptional.isPresent()) {
            return mapper.map(clienteOptional.get(), ClientesDto.class);
        }
        throw new BadRequestException("Ocurrio un error al obtener un cliente");
    }

    @Override
    public List<ClientesDto> getClientes() {
        List<ClientesDto> respuesta = new ArrayList<>();
        List<Clientes> clientes = repository.findAll();
        if (clientes != null) {
            for (Clientes c : clientes) {
                respuesta.add(mapper.map(c, ClientesDto.class));
            }
            return respuesta;
        }
        throw new BadRequestException("Ocurrio un error de listar los clientes");
    }

    @Override
    public boolean eliminarUsuario(Long id) {
        if (id != null) {
            Optional<Clientes> u = repository.findById(id);
            if (u.isPresent()) {
                repository.delete(u.get());
                return true;
            }
        }
        return false;
    }

}
