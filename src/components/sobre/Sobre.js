import React from 'react';
import Colaborador from './componentes/Colaborador';
import { colaboradores } from './colaboradores';
import './css/sobre.css';

const Sobre = () => (
  <div className="row">
    <div className="col s6 about_img" />
    <div className="col s6 about_section">
      <h1 id="sobre">Sobre</h1>
      <h1>Verdade Seja</h1>
      <h1>Dita</h1>

      <p>
        Somos mulheres e homens e definimos a nossa atuação na defesa e promoção
        dos direitos da população negra e na construção de uma sociedade onde os
        valores de justiça, equidade e solidariedade são fundamentais.
        Consideramos o racismo e a discriminação racial como mecanismos
        combinados que estruturam as relações sociais, cujos resultados diretos
        se expressam em prejuízos para as negras e negros. O racista brasileiro
        não tem nada de cordial e amistoso como muitos imaginam e sustentam. Pelo
        contrário. Nosso objetivo é criar e aplicar novas tecnologias para a
        luta políticas dos negros e negras contra o racismo; produzindo sobre o
        contexto atual das questões envolvendo os nossos direitos.
      </p>

    </div>
    <div className="col s12 volunteer_section">
      <div className="description">
        <h1 id="quem-passou-por-aqui">Quem passou por aqui</h1>

        <p>TEXTO SOBRE COLABORADORES</p>
      </div>
      <div>
        {
          colaboradores().map(colaborador => (
            <Colaborador
              key={colaborador.nome}
              nome={colaborador.nome}
              papel={colaborador.papel}
              foto={colaborador.foto}
            />
          ))
        }
      </div>
    </div>
  </div>
);

export default Sobre;