import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function CadastroBemPerdido() {
    const [descricao, setDescricao] = useState('');
    const [valorEstimado, setValorEstimado] = useState('');
    const [cpf, setCpf] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const bemPerdido = { 
            descricao: descricao, 
            usuarioCpf: cpf,
            valorEstimado: valorEstimado,
            
        };

        axios.post('http://localhost:8081/bens_perdidos', bemPerdido)
            .then(response => {
                console.log('Success:', response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2>Cadastro de Bem Perdido</h2>
            <label>Descrição:</label>
            <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
            <label>Valor Estimado:</label>
            <input type="text" value={valorEstimado} onChange={(e) => setValorEstimado(e.target.value)} required />
            <label>CPF do Usuário:</label>
            <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
            <button type="submit">Cadastrar</button>
        </form>
    );
}

export default CadastroBemPerdido;