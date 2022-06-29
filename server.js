const { response } = require("express");
const express = require("express");
const app = express();
const data = require("./data.json");

app.listen(8080, () => {
  console.log("Server running!");
});

app.get("/", (req, res) => {
  res.json("Server get");
});

//GET retorna produtos por ID
app.get("/api/produtos/:id", (req, res) => {
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
});
