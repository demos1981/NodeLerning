const express = require("express");
const bodyParser = require("body-parser");
const mongoService = require("./services/dataService");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());

mongoService
  .connectToDatabase()
  .then(() => {
    console.log("Connected to MongoDB");

    //Create
    app.post("/users", async (req, res) => {
      const { name } = req.body;
      try {
        const newItem = await mongoService.createItem(name);
        res.json(newItem);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });

    //Read
    app.get("/users", async (req, res) => {
      try {
        const items = await mongoService.getItem();
        res.json(items);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });

    //Update
    app.put("/users/:id", async (req, res) => {
      const { id } = req.params;
      const { name } = req.body;
      try {
        const result = await mongoService.updateItem(id, name);
        res.json(result);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });

    //Delete
    app.delete("/users/:id", async (req, res) => {
      const { id } = req.params;
      try {
        const result = await mongoService.deleteItem(id);
        res.json(result);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });
    // //middleware
    // app.use((req, res, next) => {
    //   res.status(404).json({ error: "Not Found" });
    // });
    // //middleware
    // app.use((err, req, res, next) => {
    //   console.error(err.stack);
    //   res.status(500).json({ error: "Internal Server Error" });
    // });

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("failed to connect to MangoDB:", err);
    process.exit(1);
  });
