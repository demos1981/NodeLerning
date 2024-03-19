const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

//Create
data.post("/users", (req, res) => {
  const { name, role, email } = req.body;
  dataBaseService.createItem(name, role, email, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

//Read
data.get("/users", (req, res) => {
  dataBaseService.getItems((err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

//Update
data.put("/users/:id", (req, res) => {
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
data.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  dataBaseService.deleteItem(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} port`);
});

// module.exports = app;
