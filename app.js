const express = require("express");
const dataBaseService = require("./services/dataSqlLiteServices");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

//Create
app.post("/users", (req, res) => {
  const { name } = req.body;
  dataBaseService.createItem(name, (err, result) => {
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
  const { name } = req.body;
  dataBaseService.updateItem(id, name, (err, result) => {
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

app.use((req, res, next) => {
  //middleware
  res.status(404).json({ error: "Not Found" });
});

app.use((err, req, res, next) => {
  //middleware
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
