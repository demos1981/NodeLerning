const express = require("express");
const mongoose = require("mongoose");
const mongoService = require("./services/dataMongoDB");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const MONGO_URL =
  "mongodb+srv://demos:dima180281@mydata.goqshqh.mongodb.net/?retryWrites=true&w=majority&appName=MyData";
mongoose.connect(MONGO_URL, {
  dbName: "models",
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connect to MongoDB:"));

// mongoService
//   .connectToDatabase()
//   .then(() => {
//     console.log("Connected to MongoDB");

//Create
app.post("/users", async (req, res) => {
  try {
    const { name, role, email } = req.body;
    const newUser = await mongoService.createUser(name, role, email);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post("/posts", async (req, res) => {
  try {
    const { title, content, userId } = req.body;
    const userWithPost = await mongoService.createPost(title, content, userId);
    res.status(201).json(userWithPost);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post("/comments", async (req, res) => {
  try {
    const { login, content, userId } = req.body;
    const userWithComment = await mongoService.createComment(
      login,
      content,
      userId
    );
    res.status(201).json(userWithComment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//Read
app.get("/users", async (req, res) => {
  try {
    const users = await mongoService.getUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/users-with-posts", async (req, res) => {
  try {
    const usersWithPosts = await mongoService.getUsersWithPost();
    res.json(usersWithPosts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/users-with-comments", async (req, res) => {
  try {
    const usersWhichLeftMoreLike2Comments =
      await mongoService.getUsersWithMore2Comments();
    res.json(usersWhichLeftMoreLike2Comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// //Update
// app.put("/users/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, role, email } = req.body;
//     const resultUser = await mongoService.updateUser(id, name, role, email);
//     res.json(resultUser);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.put("/post/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { title, content, userId } = req.body;
//     const resultPost = await mongoService.updatePost(
//       id,
//       title,
//       content,
//       userId
//     );
//     res.json(resultPost);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.put("/comment/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { login, content, userId } = req.body;
//     const resultComment = await mongoService.updateComment(
//       id,
//       login,
//       content,
//       userId
//     );
//     res.json(resultPost);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

//Delete
app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await mongoService.deleteUserPostsAndComment(id);
    res
      .status(200)
      .json({ message: "User and their posts deleted succesfully." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
//middleware
app.use((req, res) => {
  console.error(res);
  res.status(404).send("Bad Request");
});
//middleware
app.use((err, req, res, next) => {
  console.error(res);
  res.status(500).send("Server Error");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
