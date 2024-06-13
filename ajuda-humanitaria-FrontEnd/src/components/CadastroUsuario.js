import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function CadastroUsuario() {
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [cpf, setCpf] = useState('');
    const [endereco, setEndereco] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const usuario = {
            nome_completo: nomeCompleto,
            cpf: cpf,
            email: email,
            endereco_antigo: endereco,
            telefone: telefone
        };

        axios.post('http://localhost:8080/usuarios', usuario)
            .then(response => {
                toast.success('Usuário cadastrado com sucesso!');
                setNomeCompleto('');
                setCpf('');
                setEndereco('');
                setEmail('');
                setTelefone('');
            })
            .catch(error => {
                const errorMessage = error.response && error.response.data && error.response.data.message 
                    ? error.response.data.message 
                    : 'Erro ao cadastrar usuário. Tente novamente.';
                toast.error(errorMessage);
            });
    };

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h2>Cadastro de Usuário</h2>
                <label>Nome Completo:</label>
                <input type="text" value={nomeCompleto} onChange={(e) => setNomeCompleto(e.target.value)} required />
                <label>CPF:</label>
                <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
                <label>E-mail:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label>Endereço:</label>
                <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} required />
                <label>Telefone:</label>
                <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
                <button type="submit">Cadastrar</button>
            </form>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                transition={Slide}
            />
        </div>
    );
}

export default CadastroUsuario;
