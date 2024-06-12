package app.BensPerdidos.services;

import app.BensPerdidos.entities.Usuario;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.beans.factory.annotation.Value;

@Service
public class UsuarioService {
    @Value("${cadastro.usuario.service.url}")
    private String usuarioServiceUrl;


    public Usuario obterUsuarioPorCpf(String cpf) {
        RestTemplate restTemplate = new RestTemplate();
        String url = usuarioServiceUrl + "/usuarios/cpf/" + cpf;
        return restTemplate.getForObject(url, Usuario.class);
    }
}
