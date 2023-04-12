// userRoutes.js
const express = require("express");
const router = express.Router();
const connect = require("./database");
const { ObjectId } = require("mongodb");

router.post("/", async (req, res) => {
  const { _id } = req.body;

  try {
    const client = await connect();
    const database = client.db("UserDataBase");
    const collection = database.collection("user");

    const data = await collection
      .aggregate([
        {
          $match: { _id: new ObjectId(_id) },
        },
      ])
      .toArray();

    res.json({ data: data[0] });
  } catch (e) {
    console.error(e);
    res.json({ isSuccess: false });
  }
});

module.exports = router;
