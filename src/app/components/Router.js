import React from "react";
import { Routes, Route, } from "react-router-dom";
import Agendamento from "./Agendamento";
import Cadastro from "./Cadastro";
import LoginForm from "./login";
import Procedimentos from "./Procedimentos";




const Routers = () => {
    return(
        <Routes>
            
            <Route exact path="/" element={<Cadastro/>} />
            <Route path="/Agendamento"element={<Agendamento />}/>    
            <Route path="/login" element={<LoginForm/>} />
            <Route path="/procedimentos" element={<Procedimentos/>} />

        </Routes>
    )
}

export default Routers;
