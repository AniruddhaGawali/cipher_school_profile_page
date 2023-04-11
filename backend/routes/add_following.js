// userRoutes.js
const express = require("express");
const router = express.Router();
const connect = require("./database");
const { ObjectId } = require("mongodb");

router.post("/", async (req, res) => {
  const { _id, _follow_id } = req.body;

  try {
    const client = await connect();
    const database = client.db("UserDataBase");
    const collection = database.collection("user");

    const id = new ObjectId(_id);
    const follow_id = new ObjectId(_follow_id);

    const follower_data = await collection
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

    const following_data = await collection
      .aggregate([
        {
          $match: { _id: follow_id },
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

    await collection.updateOne(
      { _id: id },
      { $push: { following: following_data[0].user } }
    );

    await collection.updateOne(
      { _id: follow_id },
      { $push: { followers: follower_data[0].user } }
    );

    res.json({ isSuccess: true });

    // res.json({ isSuccess: true });
  } catch (e) {
    console.error(e);
    res.json({ isSuccess: false });
  }
});

module.exports = router;
