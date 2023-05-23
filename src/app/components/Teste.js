import React, { Component} from 'react';

import "./style.css"


class Cadastro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      cpf: '',
      telefone: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
  

    this.setState({
      [name]: value
    });
  }


  handleSubmit(event) {

    if (this.state.nome === '') {
      alert('O campo Nome não pode estar vazio');
      event.preventDefault();
      return;
    }

    if (this.state.cpf === '') {
      alert('O campo CPF não pode estar vazio');
      event.preventDefault();
      return;
    }

    if (this.state.telefone === '') {
      alert('O campo Telefone não pode estar vazio');
      event.preventDefault();
      return;
    }
    
    console.log('Nome: ' + this.state.nome + '\nCPF: ' + this.state.cpf + '\nTelefone: ' + this.state.telefone); // posso colocar alerte para aparecer a amensagem na tela e console.log para capiturar esses dados.
    event.preventDefault();
  }

  render() {
    return (
      <div className='bloco'>
        
        <form className='form' onSubmit={this.handleSubmit}>
          <h1 className='login'>CADASTRO</h1>
          <label>
            Nome:
            <input className='input'
              type="text"
              name="nome"
              value={this.state.nome}
              maxLength="110"
              onChange={this.handleInputChange} />
          </label>
          <br />

          <label>
            CPF:
            <input className='input'
              type="text"
              name="cpf"
              value={this.state.cpf}
              maxLength="11"
              onChange={this.handleInputChange} />
          </label>
          <br />

          <label>
            Telefone:
            <input className='input'
              type="text"
              name="telefone"
              value={this.state.telefone}
              maxLength="12"
              onChange={this.handleInputChange} />
          </label>

      
          <br />
            <button className='botao' type="submit">Cadastrar</button>
      
        </form>

      </div>
    );
  }
}

export default Cadastro;



