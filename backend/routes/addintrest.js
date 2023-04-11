// userRoutes.js
const express = require("express");
const router = express.Router();
const connect = require("./database");
const { ObjectId } = require("mongodb");

router.post("/", async (req, res) => {
  const { _id, intrests } = req.body;

  try {
    const client = await connect();
    const database = client.db("UserDataBase");
    const collection = database.collection("user");

    const id = new ObjectId(_id);

    await collection.updateOne({ _id: id }, { $set: { interests: intrests } });

    res.json({ isSuccess: true });
  } catch (e) {
    console.error(e);
    res.json({ isSuccess: false });
  }
});

module.exports = router;
