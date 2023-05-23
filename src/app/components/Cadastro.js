import React, { useState } from "react";
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
  const [cpf, setCPF] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { cpf, phone, name };

    // Enviar os dados para o backend-dis meus cupadre
    fetch("/api/save-data", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Dados salvos com sucesso: ", data);
      })
      .catch((error) => {
        console.error("Erro ao salvar os dados: ", error);
      });
  };

  return (
    <div className="bloco">
        <form className="form" onSubmit={handleSubmit}>

            <h1 className="login">Cadastro</h1>


            <label>
            <input 
                className="input"
                value={name}
                onChange={(e) => setName(maskOnlyLetters(e.target.value))}
                placeholder="Seu nome"
            />
            </label>
            <br/>

            <label>
            <input
                className="input"
                value={cpf}
                onChange={(e) => setCPF(maskCPF(e.target.value))}
                placeholder="Seu CPF"
            />
            </label>

            <br/>

            <label>
            <input
                className="input"
                value={phone}
                onChange={(e) => setPhone(maskPhone(e.target.value))}
                placeholder="Seu telefone"
            />
            </label>
            
            <br/>
            <button className="botao" type="submit">Cadastrar</button>
        </form>
    </div>
  );
};

export default App;



