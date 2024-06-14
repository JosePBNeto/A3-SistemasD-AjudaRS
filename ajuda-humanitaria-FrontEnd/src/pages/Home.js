import React from 'react';
import './Home.css';


function Home() {
    return (
        <div className="home">
            <h1>Ajuda Humanitária</h1>
            <p>Bem-vindo ao sistema de ajuda humanitária para pessoas afetadas pelas enchentes no Rio Grande do Sul.</p>
            <p>Utilize as opções no menu para cadastrar usuários, cadastrar bens perdidos ou consultar bens perdidos por CPF.</p>

            <div className="image-container">
                <img src="/images/image1.png" alt="Imagem 1" className="image" />
                <img src="/images/image3.png" alt="Imagem 3" className="image" />
                <img src="/images/image2.png" alt="Imagem 2" className="image" />
                
            </div>
        </div>
    );
}

export default Home;
