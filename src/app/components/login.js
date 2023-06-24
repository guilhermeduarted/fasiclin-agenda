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
    
  };

  const handleSignup = () => {
    
  };

  return (


    
    <div className="blocologin">

<nav className="menulogin">
        <ul>
          <text>LOGIN</text>
        </ul>
      </nav>


   
      <form className="formalogin" onSubmit={handleSubmit}>
   
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
      </div>
      </form>

   
    </div>
  );
};

export default  LoginForm;

