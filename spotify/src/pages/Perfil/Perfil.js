import "./Perfil.css";
import React, { useState, useEffect } from "react";
import UserServices from "../../services/UserServices";
import NavBar from "../../componentes/HeaderPrincipal";
import Usuario from "../../entities/Usuario"


export default function Perfil() {
    const [user, setUser] = useState('');
    const userServices = new UserServices();
    let usuario = new Usuario("","","","");
    
    const getUserLogado = async () => {
        
        setUser(await userServices.getSingleUser(JSON.parse(localStorage.getItem("usuarioNome"))));
    };
    useEffect(() => {
        getUserLogado();
        console.log(user);
      },[]);

    usuario.firstName = user[0].firstName;
    usuario.lastName = user[0].lastName;
    usuario.email = user[0].email;
    usuario.password = user[0].password;
    
    

    return( 
    <>
    <div><NavBar /></div>
    <div className="container justify-content-center w-75">
        <form className="justify-content-center">
            <div className="form-group text-white">
                <label className="d-flex" >firstsName</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" defaultValue={usuario.firstName}></input>
            </div>
            <div className="form-group text-white">
                <label className="d-flex">lastName</label>
                <input type="text" className="form-control" id="exampleFormControlInput2" defaultValue={usuario.lastName}></input>
            </div>
            <div className="form-group text-white">
                <label className="d-flex">email</label>
                <input type="email" className="form-control" id="exampleFormControlInput3" defaultValue={usuario.email}></input>
            </div>
            <div className="form-group text-white">
                <label className="d-flex">password</label>
                <input type="password" className="form-control" id="exampleFormControlInput4" defaultValue={usuario.password}></input>
            </div>

        </form>
    </div>
    </>)    
    
}
