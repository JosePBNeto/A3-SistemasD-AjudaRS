package app.BensPerdidos.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor
@Data
public class Usuario {

    private Long id;

    @JsonProperty("nome_completo")
    private String nomeCompleto;
    private String cpf;
    @JsonProperty("endereco_antigo")
    private String enderecoAntigo;
    private String telefone;
    private String email;

}
