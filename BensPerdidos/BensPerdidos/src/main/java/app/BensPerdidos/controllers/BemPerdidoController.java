package app.BensPerdidos.controllers;

import app.BensPerdidos.entities.BemPerdido;
import app.BensPerdidos.entities.Usuario;
import app.BensPerdidos.services.BemPerdidoService;
import app.BensPerdidos.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/bens_perdidos")
public class BemPerdidoController {
    @Autowired
    private BemPerdidoService bemPerdidoService;

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping
    public ResponseEntity<?> cadastrarBemPerdido(@RequestBody BemPerdido bemPerdido) {

        RestTemplate restTemplate = new RestTemplate();
        String usuarioServiceUrl = "http://localhost:8080/usuarios/" + bemPerdido.getUsuarioId();
        ResponseEntity<?> usuarioResponse = restTemplate.getForEntity(usuarioServiceUrl, Object.class);

        if (usuarioResponse.getStatusCode().is2xxSuccessful()) {
            BemPerdido bemPerdidoCadastrado = bemPerdidoService.cadastrarBemPerdido(bemPerdido);
            return ResponseEntity.ok(bemPerdidoCadastrado);
        } else {
            return ResponseEntity.status(usuarioResponse.getStatusCode()).body("Usuário não encontrado");
        }

    }

    @GetMapping("/usuario/{usuarioId}")
    public ResponseEntity<?> obterUsuarioEBensPerdidos(@PathVariable Long usuarioId) {
        Usuario usuario = usuarioService.obterUsuario(usuarioId);
        if (usuario == null) {
            return ResponseEntity.status(404).body("Usuário não encontrado");
        }

        List<BemPerdido> bensPerdidos = bemPerdidoService.obterBensPerdidosPorUsuario(usuarioId);
        Map<String, Object> response = new HashMap<>();
        response.put("nomeUsuario", usuario.getNomeCompleto());
        response.put("bensPerdidos", bensPerdidos);

        return ResponseEntity.ok(response);
    }
}

