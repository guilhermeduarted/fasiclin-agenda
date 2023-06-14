import React, { useState } from "react";
import axios from "axios";
import "./style.css"

const maskCPF = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};

const maskPhone = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{4})(\d+?)$/, "$1");
};

const maskOnlyLetters = (value) => {
  return value.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, "");
};

const App = () => {
  const [formData, setFormData] = useState({
    nomeCliente: "",
    cpfCliente: "",
    telefoneCliente: ""
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    axios.post("http://localhost:8080/agenda/inserir/cliente", formData)
      .then(response => {
        console.log(response.data)
      }).catch(error => {
        console.error(error)
      })
  }

  return (
    <div className="bloco">
        <form className="form" onSubmit={handleSubmit}>

            <h1 className="login">Cadastro do Paciente</h1>


            <label>
            <input
                name="nome"
                className="input"
                value={formData.nomeCliente}
                onChange={handleChange}
                placeholder="Nome do paciente"
            />
            </label>
            <br/>

            <label>
            <input
                name="cpf"
                className="input"
                value={formData.cpfCliente}
                onChange={handleChange}
                placeholder="CPF do paciente"
            />
            </label>

            <br/>

            <label>
            <input
                name="telefone"
                className="input"
                value={formData.telefoneCliente}
                onChange={handleChange}
                placeholder="Telefone do paciente"
            />
            </label>
            
            <br/>
            <button className="botao" type="submit">Cadastrar</button>
        </form>
    </div>
  );
};

export default App;
