import React, { useEffect, useState } from "react";
import './App.css';
import Axios from "axios";
import card from "./components/card";

function App() {
  const [values, setValues] = useState();

  const handleChangeValues = (value) => {
    setValues((preValue) => ({
        ...preValue,
        [value.target.name]: value.target.value,
      }));
  };

  const handleclickButton = () => {
    Axios.post("http://localhost:3001/register", {
      nome: values.nome,
      preco: values.preco,
      categoria: values.categoria,
    }).then((response)=>{
      console.log(response);
    });
};

useEffect(()=>{
  Axios.get("http://localhost:3001/getcards").then((response)=>{
    console.log(response);
});
}, []);

  return (
    <div className="app-container">
      <div className="register-container">
        <h1 className="register-title">LivraMentos</h1>
        <input 
          type="text"
          name="nome"
          placeholder="Nome"
          className="register-input"
          onChange={handleChangeValues}
        />
        <input 
          type="text"
          name="preco"
          placeholder="Preço"
          className="register-input"
          onChange={handleChangeValues}
          
        />
        <input 
          type="text"
          name="categoria"
          placeholder="Categoria"
          className="register-input"
          onChange={handleChangeValues}

        />
<button 
  className="register-button"
  onClick={() => handleclickButton()}
>
          Cadastrar
        </button>
      </div>

      <card>Card</card>
    </div>
  );
}

export default App;
