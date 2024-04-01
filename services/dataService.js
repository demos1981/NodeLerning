const { MangoClient, ObjectId } = require("mongodb");
const MONGO_URL = "mongodb+srv://Demos:dima180281@mydata.goqshqh.mongodb.net/";
// const MONGO_URL = "mongodb://localhost:27017";
const DB_NAME = "your_database";
const COLLECTION_NAME = "users";

const client = new MongoClient(MONGO_URL);
let collection;

async function connectToDatatbase() {
  await client.connect();
  const db = client.db(DB_NAME);
  collection = db.collection(COLLECTION_NAME);
}

async function disconnectFromDatabase() {
  if (client) {
    await client.close();
  }
}

async function createItem(name) {
  try {
    const result = await collection.insertOne({ name });
    if (result) {
      const insertedId = result.insertedId;
      const createdItem = await collection.findOne({ _id: insertedId });
      return createdItem;
    } else {
      throw new Error("Failed data");
    }
  } catch (error) {
    console.error("Error in created", error.message);
    return { error: error.message };
  }
}

async function getItem() {
  const users = await collection.find({}).toArray();
  return users;
}

async function updateItem(id, name) {
  try {
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { name } }
    );
    return result;
  } catch (error) {
    console.error("Error in updateItem:", error.message);
    return { error: error.message };
  }
}

async function deleteItem(id) {
  try {
    if (!ObjectId.isValid(id)) {
      throw new Error("Invalid ObjectId");
    }
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    return result;
  } catch (error) {
    console.error("Error in deleteItem", error.message);
    return { error: error.message };
  }
}

module.expoerts = {
  connectToDatatbase,
  disconnectFromDatabase,
  createItem,
  getItem,
  updateItem,
  deleteItem,
};
