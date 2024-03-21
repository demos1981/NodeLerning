const DATA = require("./localData.json");

const dataBaseService = DATA;
console.log(DATA);

const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

//Create
app.post("/users", (req, res) => {
  const { name, role, email } = req.body;
  dataBaseService.createItem(name, role, email, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

//Read
app.get("/users", (req, res) => {
  dataBaseService.getItems((err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    console.log(res.json(result));
  });
});

//Update
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, role, email } = req.body;
  dataBaseService.updateItem(id, name, role, email, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

//Delete
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  dataBaseService.deleteItem(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
