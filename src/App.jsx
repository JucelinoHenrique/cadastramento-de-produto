import React, { useState } from "react";
import './App.css';
import Cadastro from './componets/Cadastro';
import CreateCards from "./componets/CreateCards"
import CardProduto from "./componets/CardProduto"

function App() {
  const [Card, setCard] = useState([
    {
      nome: "Arroz",
      codigo: "E222",
      preco: 2.74,
    },
    {
      nome: "feijão",
      codigo: "E232",
      preco: 3.75,
    }

  ])


  const addCard = (nomeProduto, codigoProduto, precoProduto) => {
    const NewCard = [...Card, {
      nome: nomeProduto,
      codigo: codigoProduto,
      preco: precoProduto,
    }]
    setCard(NewCard)
  }
   
  const RemoveCard = (nomeProduto) => {
    const NewCard = Card.filter(Card => Card.nome !== nomeProduto )
    setCard(NewCard);
  }


  const ListProdutosCard = () => Card.map((produto) => (<CardProduto codigo={produto.codigo} nome={produto.nome} preco={produto.preco} RemoveCard={RemoveCard}/>))


  return (
    <div className="Container">
      <div className='Container-Cadastro'>
        <h1 className='Container-title'>JK</h1>
        <Cadastro AddCard={addCard}  />
      </div>
      <div className="Container-Produtos"Card={Card} >
      <ListProdutosCard />
      </div>      
      
    </div>
  );
}

export default App;
