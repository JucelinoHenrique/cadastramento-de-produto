import React from 'react'
import './CardProduto.css'
import { AiOutlineBarcode } from "react-icons/ai"
import { BsFillBasketFill } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
export default function CardProduto({codigo, nome, preco,RemoveCard}) {
 
  return (
    <div className='Container-Card' >
        <div className='Container-Card-Nome'>
            <BsFillBasketFill/>
            <h2 >{nome}</h2>       
            <button className='Button-Close' onClick={() => RemoveCard(nome)}> 
            <AiOutlineCloseCircle />
            </button>
        </div>
        <div className='Container-Card-Info'>
            <div className='Card-Codigo'>
            <AiOutlineBarcode/>
            <h3>{codigo}</h3>        
            </div>
            <h3>R$ {Number(preco).toLocaleString('pt-BR')}</h3>            
        </div>
    </div>
  )
}
