const express = require("express");
const app = express();
const mysql = require ("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    port: "3306",
    user: "root",
    password:"",
    database: "livramentos",
});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
const { nome } = req.body;
const { preco } = req.body;
const { categoria } = req.body;

let mysql = "INSERT INTO livros ( nome, preco, categoria) VALUES (?, ?, ?)";
  db.query(mysql, [nome, preco, categoria], (err, result) => {
    res.send(result);
  });
});

app.post("/search", (req, res) => {
    const { nome } = req.body;
    const { preco } = req.body;
    const { categoria } = req.body;
  
    let mysql =
      "SELECT * from livros WHERE nome = ? AND preco = ? AND categoria = ?";
    db.query(mysql, [nome, preco, categoria], (err, result) => {
      if (err) res.send(err);
      res.send(result);
    });
  });

  app.get("/getCards", (req, res) => {
    let mysql = "SELECT * FROM livros";
    db.query(mysql, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
  
  app.put("/edit", (req, res) => {
    const { id } = req.body;
    const { nome } = req.body;
    const { preco } = req.body;
    const { categoria } = req.body;
    let mysql = "UPDATE livros SET nome = ?, preco = ?, categoria = ? WHERE id = ?";
    db.query(mysql, [nome, preco, categoria, id], (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });
  
  app.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
    let mysql = "DELETE FROM livros WHERE id = ?";
    db.query(mysql, id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.listen(3002, () => {
    console.log("rodando servidor")
});