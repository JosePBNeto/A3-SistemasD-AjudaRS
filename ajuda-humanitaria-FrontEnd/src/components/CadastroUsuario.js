import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function CadastroUsuario() {
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [cpf, setCpf] = useState('');
    const [endereco, setEndereco] = useState('');
    const [telefone, setTelefone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const usuario = { nomeCompleto, cpf, endereco, telefone };

        axios.post('http://localhost:8080/usuarios', usuario)
            .then(response => {
                console.log('Success:', response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2>Cadastro de Usuário</h2>
            <label>Nome Completo:</label>
            <input type="text" value={nomeCompleto} onChange={(e) => setNomeCompleto(e.target.value)} required />
            <label>CPF:</label>
            <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
            <label>Endereço:</label>
            <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} required />
            <label>Telefone:</label>
            <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
            <button type="submit">Cadastrar</button>
        </form>
    );
}

export default CadastroUsuario;
