import React from "react";
import { Routes, Route, } from "react-router-dom";
import Agendamento from "./Agendamento";
import App from "./Cadastro";
import LoginForm from "./login";








const Routers = () => {
    return(
        <Routes>
            
            <Route exact path="/" element={<App/>} />
            <Route path="/Agendamento"element={<Agendamento />}/>    
            <Route path="/login" element={<LoginForm/>} />


        </Routes>
    )
}

export default Routers;
