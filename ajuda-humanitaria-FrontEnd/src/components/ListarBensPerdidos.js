import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function ListarBensPerdidos() {
    const [cpf, setCpf] = useState('');
    const [usuario, setUsuario] = useState(null);
    const [bensPerdidos, setBensPerdidos] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.get(`http://localhost:8081/bens_perdidos/usuario/cpf/${cpf}`)
            .then(response => {
                setUsuario(response.data.nomeUsuario);
                setBensPerdidos(response.data.bensPerdidos);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h2>Consultar Bens Perdidos por CPF</h2>
                <label>CPF do Usuário:</label>
                <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
                <button type="submit">Consultar</button>
            </form>
            {usuario && (
                <div>
                    <h3>Usuário: {usuario}</h3>
                    <h4>Bens Perdidos:</h4>
                    <ul>
                        {bensPerdidos.map(bem => (
                            <li key={bem.id}>
                                {bem.descricao} - R$ {bem.valorEstimado}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default ListarBensPerdidos;
