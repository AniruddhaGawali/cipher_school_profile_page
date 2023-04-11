// userRoutes.js
const express = require("express");
const router = express.Router();
const connect = require("./database");
const { ObjectId } = require("mongodb");

router.get("/", async (req, res) => {
  const { _id } = req.body;

  try {
    const client = await connect();
    const database = client.db("UserDataBase");
    const collection = database.collection("user");

    const id = new ObjectId(_id);

    const data = await collection
      .aggregate([
        {
          $match: { _id: id },
        },
        {
          $project: {
            "user.firstname": 1,
            "user.lastname": 1,
            "user.email": 1,
            followers: 1,
            following: 1,
          },
        },
      ])
      .toArray();

    res.json({ isSuccess: true, data: data[0] });

    // res.json({ isSuccess: true });
  } catch (e) {
    console.error(e);
    res.json({ isSuccess: false });
  }
});

module.exports = router;
