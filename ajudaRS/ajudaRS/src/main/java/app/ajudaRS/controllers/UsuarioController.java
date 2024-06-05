package app.ajudaRS.controllers;

import app.ajudaRS.entities.Usuario;
import app.ajudaRS.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {
    @Autowired
    private UsuarioService usuarioService;

    @PostMapping
    public ResponseEntity<Usuario> cadastrarUsuario(@RequestBody Usuario usuario) {
        Usuario usuarioResposta = usuarioService.cadastrarUsuario(usuario);
        return new ResponseEntity<>(usuarioResposta, HttpStatus.CREATED);
    }


    @GetMapping("/cpf/{cpf}")
    public ResponseEntity<Usuario> buscarPorCpf(@PathVariable String cpf) {
        return usuarioService.buscarPorCpf(cpf)
                .map(usuario -> ResponseEntity.ok(usuario))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }
}

