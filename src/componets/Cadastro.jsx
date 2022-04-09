
import "./Cadastro.css"
import Buttons from './Buttons.jsx';
import { useState } from "react";


const Cadastro = ({AddCard, Card})=>{ 
    const [NomeProduto, setNomeProduto]= useState('');
    const [CodigoProduto, setCodigoProduto]= useState('');
    const [PrecoProduto, setPrecoProduto] = useState('');
    const HandleChangeNome = (e)=>{
        setNomeProduto(e.target.value);
    }

    const HandleChangeCodigo = (ec)=>{
        setCodigoProduto(ec.target.value);
    }

    const HandleChangePreco = (ep)=>{
        setPrecoProduto(ep.target.value);
    }

    const HandleClickAdd = () =>{
        if(NomeProduto,CodigoProduto,PrecoProduto === ''){
        }
        else
        AddCard(NomeProduto,CodigoProduto,PrecoProduto);
        setNomeProduto('');
        setCodigoProduto('');
        setPrecoProduto('');    
    }
    const HandlerClickClear = ()=>{
        setNomeProduto('');
        setCodigoProduto('');
        setPrecoProduto('');    
    }
    return(
        <div className="Container-form" >
            <h1 className="Cadastro-title">CADASTRE SEU PRODUTO</h1>
            <form className="form-cadastro">
                <input type="text" placeholder="INSIRA O NOME DO PRODUTO" value={NomeProduto} onChange={HandleChangeNome} />
                <input type="text" placeholder="INSIRA O CODIGO DO PRODUTO" value={CodigoProduto} onChange={HandleChangeCodigo} />
                <input type="number" placeholder="INSIRA O PREÇO DO PRODUTO" value={PrecoProduto} onChange={HandleChangePreco}/>
                <Buttons HandleClickAdd={HandleClickAdd} HandlerClickClear={HandlerClickClear}/>
            </form>
        </div>
    );
}

export default Cadastro;