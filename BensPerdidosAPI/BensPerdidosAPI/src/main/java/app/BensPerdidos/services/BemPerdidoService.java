package app.BensPerdidos.services;

import app.BensPerdidos.entities.BemPerdido;
import app.BensPerdidos.repositories.BemPerdidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BemPerdidoService {
    @Autowired
    private BemPerdidoRepository bemPerdidoRepository;

    public BemPerdido cadastrarBemPerdido(BemPerdido bemPerdido) {
        return bemPerdidoRepository.save(bemPerdido);
    }

    public List<BemPerdido> obterBensPerdidosPorUsuario(String usuarioCpf) {
        return bemPerdidoRepository.findByUsuarioCpf(usuarioCpf);
    }
}