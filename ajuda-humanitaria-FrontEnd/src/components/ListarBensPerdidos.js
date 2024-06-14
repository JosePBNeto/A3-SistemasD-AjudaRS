import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function ListarBensPerdidos() {
    const [cpf, setCpf] = useState('');
    const [usuario, setUsuario] = useState(null);
    const [bensPerdidos, setBensPerdidos] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.get(`http://localhost:8081/bens_perdidos/usuario/cpf/${cpf}`)
            .then(response => {
                const data = response.data;
                setUsuario(data['Nome do usuário:']);
                setBensPerdidos(data['Bem perdido:']);
                toast.success('Consulta realizada com sucesso!');
            })
            .catch(error => {
                console.error('Error:', error);
                toast.error('Erro ao consultar bens perdidos. Verifique o CPF e tente novamente.');
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
                <div className="result">
                    <h3>Usuário: {usuario}</h3>
                    <h4>Bens Perdidos:</h4>
                    <ul>
                        {bensPerdidos.map((bem, index) => (
                            <li key={index}>
                                <span className="descricao">{bem.descricao}</span>
                                <span className="valor">R$ {bem.valorEstimado.toFixed(2)}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
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
            />
        </div>
    );
}

export default ListarBensPerdidos;
