import React from "react";
import "./Buttons.css"
const Buttons = ({HandleClickAdd,HandlerClickClear}) =>{
 
    return(
        <div className="Container-Buttons">
            <button className="Button-voltar" type="Button" onClick={HandlerClickClear}>Voltar</button>
            <button className="Button-cadastrar" type="Button" onClick={HandleClickAdd} >Cadastrar</button>
        </div>
    )
}


export default Buttons;