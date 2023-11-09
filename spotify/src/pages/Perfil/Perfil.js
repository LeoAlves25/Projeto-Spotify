import "./Perfil.css";
import React, { useState, useEffect } from "react";
import UserServices from "../../services/UserServices";
import NavBar from "../../componentes/HeaderPrincipal";
import Usuario from "../../entities/Usuario"
import { useNavigate } from "react-router-dom";


export default function Perfil() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        user_id: '',
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const [userAtualizado, setUserAtualizado] = useState({
        user_id: '',
        firstName: '',  
        lastName: '',
        email: '',
        password: ''
    });

    let dados;
    const userServices = new UserServices();

    let usuario = new Usuario("","","","");
    
    const getUserLogado = async () => {
        dados = await userServices.getSingleUser(JSON.parse(localStorage.getItem("usuarioEmail")))
        console.log(dados)
        setUser(dados);  
        
    };
    useEffect(() => {
        getUserLogado();
      },[]);
      

    
    usuario.firstName = user.firstName;
    usuario.lastName = user.lastName;
    usuario.email = user.email;
    usuario.password = user.password;
 
    

    
    
    function atualizarInfo(e){
        e.preventDefault();
        setUserAtualizado({
            ...userAtualizado, [e.target.name]: e.target.value
        });
    }

    function atualizarBanco(e){
        e.preventDefault();
        userAtualizado.user_id = user.user_id;

        if(userAtualizado.firstName === ''){
            userAtualizado.firstName = user.firstName;
        }
        if(userAtualizado.lastName === ''){
            userAtualizado.lastName = user.lastName;
        }
        if(userAtualizado.email === ''){
            userAtualizado.email = user.email;
        }
        if(userAtualizado.password === ''){
            userAtualizado.password = user.password;
        }

        let result =userServices.putUser(userAtualizado.user_id,userAtualizado);

        if (result){

            localStorage.setItem("usuarioNome", JSON.stringify(userAtualizado.firstName));
            localStorage.setItem("usuarioEmail", JSON.stringify(userAtualizado.email));

            navigate("/principal");
        }
        console.log(userAtualizado);
    }

    

    return( 
    <>
    <div><NavBar /></div>
    <div className="background h-100">
    <div className="container justify-content-center w-75 ">
        <br></br>
        <div><h1>Editar Perfil</h1></div>
        <form onSubmit = {atualizarBanco}className="justify-content-center" >
            <div className="form-group text-white">
                <label className="d-flex" >firstsName</label>
                <input type="text" className="form-control" onChange={atualizarInfo}id="firstName" name="firstName" defaultValue={usuario.firstName}></input>
            </div>
            <div className="form-group text-white">
                <label className="d-flex">lastName</label>
                <input type="text" className="form-control" onChange={atualizarInfo} id="lastName" name="lastName" defaultValue={usuario.lastName}></input>
            </div>
            <div className="form-group text-white">
                <label className="d-flex">email</label>
                <input type="email" className="form-control" onChange={atualizarInfo} id="email" name="email" defaultValue={usuario.email}></input>
            </div>
            <div className="form-group text-white">
                <label className="d-flex">password</label>
                <input type="password" className="form-control" onChange={atualizarInfo} id="inputPassword" name="password" defaultValue={usuario.password}></input>
            </div>
            <br></br>
            <div><button type ="submit" className="btn btn-success btn-lg" >Confirmar</button></div>

        </form>
    </div>
    </div>
    </>)    
    
}
