import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import React from "react";

const Procedimentos = () => {
  const [data, setData] = useState([])

  useEffect(async () => {
    await axios.get("http://localhost:8080/agenda/especialidade", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then((response) => setData(response.data))
    .catch((error) => {
      console.error(error);
    });
  }, [])

  console.log(data)

  return(

    

  
    
    <table className="blocoprocedimento">

      <div className="sobrebar">
        <nav>
                <ul class="menu">
                  <li><img className="fasipimage" src="https://grupofasipe.com.br/img/grupo-fasipe.png"></img></li>
                  <li><a className="a" href="#">AGENDA POR PROFISSIONAL</a></li>
                  <li><a className="a" href="./components/Procedimento">PESQUISA POR CLIENTE</a></li>
                  <li><a className="a" href="#">HISTORICO DE AGENDA</a></li>
                </ul>
        </nav>
    </div>
      <thead className="procedimento">
        <tr>
          <th>ID</th>
          <th>Procedimento</th>
          <th>Custo operacional</th>
          <th>Honorários</th>
          <th>Custo total</th>
        </tr>
      </thead>
      <tbody>
          {data.map((qualquerNome) => (
            <tr key={qualquerNome.idProcedimento}>
              <th>{qualquerNome.idProcedimento}</th>
              <th>{qualquerNome.procedimento}</th>
              <th>{qualquerNome.custoOperacional}</th>
              <th>{qualquerNome.honorarios}</th>
              <th>{qualquerNome.custoTotal}</th>
            </tr>
          ))}
      </tbody>
    </table>
  )
}



export default Procedimentos