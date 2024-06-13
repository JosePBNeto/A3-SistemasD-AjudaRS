import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
                toast.success('Bem perdido registrado com sucesso!')
                setDescricao('')
                setValorEstimado('')
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
            <h2>Cadastro de Bem Perdido</h2>
            <label>Descrição:</label>
            <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
            <label>Valor Estimado:</label>
            <input type="text" value={valorEstimado} onChange={(e) => setValorEstimado(e.target.value)} required />
            <label>CPF do Usuário:</label>
            <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
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

export default CadastroBemPerdido;