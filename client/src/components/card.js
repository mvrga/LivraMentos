import React from "react";
import "./card.css";
import FormDialog from "../components/dialog/dialog";

export default function Card(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <FormDialog
        open={open}
        setOpen={setOpen}
        title={props.nome}
        categoria={props.categoria}
        preco={props.preco}
        listCard={props.listCard}
        setListCard={props.setListCard}
        id={props.id}
      />
      <div className="card-container" onClick={() => setOpen(true)}>
        <h1 className="card-title">{props.nome}</h1>
        <p className="card-id">{props.id}</p>
        <p className="card-categoria">{props.categoria}</p>
        <h3 className="card-preco">R${props.preco}</h3>
      </div>
    </>
  );
}