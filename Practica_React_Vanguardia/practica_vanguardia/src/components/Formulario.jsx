import React, { useState } from "react";
import Boton from "../boton/Boton";


const Formulario = () => {

    //Variables de formulario
    const[loginPizza,setLoginPizza] = useState({
        nombreUsuario : '',
        password: '',

    });

    const handleInputChange = (event) => {
       console.log(event.target);
    }

    return(
        <>
        <form>
            <div>
                <h1>Login Pizzeria</h1>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <label>Nombre de Usuario: </label>
                    <input type="text" value={loginPizza.nombreUsuario}></input>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <label>Password: </label>
                    <input type="password" value={loginPizza.password}></input>
                </div>
                <Boton textoBoton={"Ingresar"}/>
            </div>
        </form>
        </>
    );

}

export default Formulario;