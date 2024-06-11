package app.BensPerdidos.repositories;

import app.BensPerdidos.entities.BemPerdido;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;

public interface BemPerdidoRepository extends JpaRepository<BemPerdido, Long> {
    List<BemPerdido> findByUsuarioId(Long usuarioId);
}
