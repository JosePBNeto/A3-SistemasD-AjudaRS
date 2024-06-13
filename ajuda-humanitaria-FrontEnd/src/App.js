import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import CadastroUsuarioPage from './pages/CadastroUsuarioPage';
import CadastroBemPerdidoPage from './pages/CadastroBemPerdidoPage';
import ListarBensPerdidosPage from './pages/ListarBensPerdidosPage';
import './App.css';
import logo from './logo.png'; 

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/cadastro-usuario">Cadastro de Usuário</Link></li>
                            <li><Link to="/cadastro-bem-perdido">Cadastro de Bem Perdido</Link></li>
                            <li><Link to="/listar-bens-perdidos">Consultar Bens Perdidos</Link></li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cadastro-usuario" element={<CadastroUsuarioPage />} />
                        <Route path="/cadastro-bem-perdido" element={<CadastroBemPerdidoPage />} />
                        <Route path="/listar-bens-perdidos" element={<ListarBensPerdidosPage />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
