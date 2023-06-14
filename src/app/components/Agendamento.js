import React, { useState } from "react";
import Calendar from 'react-calendar';
import "./style.css"

function Agendamento() {
  const [procedimentoSelecionado, setProcedimentoSelecionado] = useState(null);
  const [dataSelecionada, setDataSelecionada] = useState(null);
  const [medicosDisponiveis, setMedicosDisponiveis] = useState([]);
  const [especialidade, setEspecialidade] = useState()

  const especialistas = {
    NUTRIÇÃO: ["Dr. Fulano", "Dr. Beltrano","Dr.lololo"],
    PSICOLOGIA: ["Dra. Ciclana", "Dr. Silva"],
    ENFERMAGEM: ["Enfermeiro Beltrano", "Enfermeira Fulana"],
    FISIOTERAPIA: ["Dr. Fisioterapeuta", "Dra. Fisioterapeuta"]
  }

  const handleProcedimentoSelecionado = (procedimento) => {
    setProcedimentoSelecionado(procedimento);
  };

  const handleDataSelecionada = (data) => {
    setDataSelecionada(data);
   
    setMedicosDisponiveis(especialistas[procedimentoSelecionado]);
  };

  const handleMedicoSelecionado = (medico) => {

    alert(`Procedimento agendado com sucesso com o médico ${medico}!`);
  };

  return (
    <div className="bloco">
      <div className="form">
        <h3>Selecione um procedimento:</h3>
        <button className="botao-age" onClick={() => handleProcedimentoSelecionado("NUTRIÇÃO")}>
          NUTRIÇÃO
        </button>
        <button className="botao-age" onClick={() => handleProcedimentoSelecionado("PSICOLOGIA")}>
          PSICOLOGIA
        </button>
        <button className="botao-age" onClick={() => handleProcedimentoSelecionado("ENFERMAGEM")}>
          ENFERMAGEM
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
              <li key={medico}>
                <button onClick={() => handleMedicoSelecionado(medico)}>{medico}</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Agendamento;
