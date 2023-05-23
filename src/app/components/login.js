import React, { useState } from "react";
import "./style.css";

const maskOnlyLetters = (value) => {
  return value.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, "");
};

const LoginForm = () => {
  const [name, setName] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { senha, name };

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

  const handleForgotPassword = () => {
    // Lógica para lidar com o link "Esqueci minha senha"
    // redirecionamento para a página de recuperação de senha, por exemplo.
  };

  const handleSignup = () => {
    // Lógica para lidar com o link "Não tenho cadastro"
    // redirecionamento para a página de cadastro, por exemplo.
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
        <br />

        <label>
          <input
            className="input"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            type="password"
            placeholder="Cadastro de senha"
          />
        </label>
        <br />

        <button className="botao" type="submit">
          Cadastrar
        </button>

        <div className="links">
        <a href="#" onClick={handleForgotPassword}>
          Esqueci minha senha
        </a>
        
        <br />
        <a href="#" onClick={handleSignup}>
          Não tenho cadastro
        </a>
      </div>
      </form>

   
    </div>
  );
};

export default  LoginForm;

