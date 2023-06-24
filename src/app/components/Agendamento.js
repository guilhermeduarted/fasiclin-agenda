import React, { useState, useEffect } from "react";
import Calendar from 'react-calendar';
import axios from "axios";
import Procedimentos from "./Procedimentos";

import "./style.css"

function Agendamento() {
  const [procedimentoSelecionado, setProcedimentoSelecionado] = useState(null);
  const [dataSelecionada, setDataSelecionada] = useState(null);
  const [medicosDisponiveis, setMedicosDisponiveis] = useState([]);
  const [especialidade, setEspecialidade] = useState();

  useEffect(() => {
    if (procedimentoSelecionado) {
      carregarMedicosDisponiveis();
    }
  }, [procedimentoSelecionado]);

  const carregarMedicosDisponiveis = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/agenda/especialistas?especialidade=${procedimentoSelecionado}`
      );
      setMedicosDisponiveis(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleProcedimentoSelecionado = (procedimento) => {
    setProcedimentoSelecionado(procedimento);
  };

  const handleDataSelecionada = (data) => {
    setDataSelecionada(data);
  };

  const handleMedicoSelecionado = (medico) => {
    alert(`Procedimento agendado com sucesso com o médico ${medico}!`);
  };

  return (

  <div className="sobrebar">

      <nav>
              <ul class="menu">
                <li><img className="fasipimage" src="https://grupofasipe.com.br/img/grupo-fasipe.png"></img></li>
                <li><a className="a" href="#">AGENDA POR PROFISSIONAL</a></li>
                <li><a className="a" href="./components/Procedimento">PESQUISA POR CLIENTE</a></li>
                <li><a className="a" href="#">HISTORICO DE AGENDA</a></li>
                
              </ul>
      </nav>
      
    <div className="blocoAGENDA">
      <div className="formAGENDA">
   
      
        <button className="botao-age" onClick={() => handleProcedimentoSelecionado("NUTRIÇÃO")}>
          NUTRIÇÃO
        </button>
        <button className="botao-age" onClick={() => handleProcedimentoSelecionado("PSICOLOGIA")}>
          PSICOLOGIA
        </button>
        <button className="botao-age" onClick={() => handleProcedimentoSelecionado("ENFERMAGEM")}>
          ENFERMAGEM
        </button>
        <button className="botao-age" onClick={() => handleProcedimentoSelecionado("ODONTOLOGIA")}>
          ODONTOLOGIA
        </button>
        <button className="botao-age" onClick={() => handleProcedimentoSelecionado("ESTÉTICA")}>
          ESTÉTICA
        </button>
        <button className="botao-age" onClick={() => handleProcedimentoSelecionado("FISIOTERAPIA")}>
          FISIOTERAPIA
        </button>
       
      </div>

      {procedimentoSelecionado && (
        <div>
          <h3>Selecione uma data:</h3>
          <Calendar onChange={handleDataSelecionada} value={dataSelecionada} />
        </div>
      )}
      {dataSelecionada && (
        <div>
          <p>Procedimento selecionado: {procedimentoSelecionado}</p>
          <p>Data selecionada: {dataSelecionada.toLocaleDateString()}</p>
          <h3>Especialistas disponíveis:</h3>
          <ul>
            {medicosDisponiveis.map((medico) => (
              <li key={medico.id}>
                <button onClick={() => handleMedicoSelecionado(medico.nome)}>{medico.nome}</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  
  
  </div>
  );
}

export default Agendamento
