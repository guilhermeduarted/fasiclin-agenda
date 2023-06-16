import React, { useState } from "react";
import axios from "axios";
import "./style.css"

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nomeCliente: "",
    cpfCliente: "",
    telefoneCliente: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("http://localhost:8080/agenda/inserir/cliente", formData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="bloco">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="login">Cadastro do Paciente</h1>

        <label>
          <input
            name="nomeCliente"
            className="input"
            value={formData.nomeCliente}
            onChange={handleChange}
            placeholder="Nome do paciente"
          />
        </label>
        <br />

        <label>
          <input
            name="cpfCliente"
            className="input"
            value={formData.cpfCliente}
            onChange={handleChange}
            placeholder="CPF do paciente"
          />
        </label>

        <br />

        <label>
          <input
            name="telefoneCliente"
            className="input"
            value={formData.telefoneCliente}
            onChange={handleChange}
            placeholder="Telefone do paciente"
          />
        </label>

        <br />
        <button className="botao" type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
