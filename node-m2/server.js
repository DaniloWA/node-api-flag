const express = require("express");
const app = express();
const data = require("./data.json");
const fs = require("fs");
const path = require("path");
const { parse } = require("path");
const { response } = require("express");

app.use(express.json());

app.listen(8080, () => {
  console.log("Server running!");
});

app.get("/", (req, res) => {
  res.json("Server get");
});

//GET retorna produtos por ID
/* app.get("/api/produtos/:id", (req, res) => {
  const { id } = req.params;

  try {
    const filteredID = data.filter((data) => {
      return id === data.id;
    });

    if (filteredID.length === 0) {
      return res.status(404).json("Id not found");
    }

    return res.status(200).json(filteredID);
  } catch (error) {
    return res.status(404).json(error);
  }
}); */

/* app.post("/api/produtos", (req, res) => {
  const produto = req.body;

  console.log(req.body);

  try {
    if (!produto && produto.length != 0) {
      return res.status(404).json("error");
    }

    fs.writeFile(path.join(__dirname, "data.json"), "teste", (error) => {
      if (error) return console.log(error);

      console.log("Arquivo modificado com sucesso!");
    });

    console.log(data, " ddddd");
    return res.status(201).send("www.google.com");
  } catch (error) {
    return console.log(error);
  }
}); */

/* app.put("/api/produtos/:id", async (req, res) => {
  const produtoID = await req.params;
  let produto = "";
  console.log(produtoID);

  try {
    if (!produtoID) {
      return res.status(404).json("error");
    }

    // Ler arquivo
    fs.readFile(path.join(__dirname, "data.json"), "utf8", (error, dt) => {
      if (error) return console.log(error);
      let data = dt;
      console.log(data);
      produto = data.forEach((produto) => {
        produto.id === produtoID;
      });

      if (produto.length < 1)
        return res.status(404).json("produto não encontrado");
    });
    // Adicionar à um arquivo
    fs.appendFile(path.join(__dirname, "data.json"), "Hello World", (error) => {
      if (error) return console.log(error);

      console.log("Arquivo modificado com sucesso!");
    });

    return res.status(202).json(produto + " www.google.com");
  } catch (error) {
    return console.log(error);
  }
}); */

app.put("/api/produtos", (req, res) => {
  const { id, new_id } = req.body;

  try {
    let filterId = data.filter((produto) => {
      if (id === produto.id) {
        return (produto.id = new_id);
      }

      if (filterId.length === 0) return res.status(404).json("id not found");
    });

    response.status(200).json({ filterId, link: "http://flag.pt" });
  } catch (error) {
    res.status(400).json(error);
  }
});
