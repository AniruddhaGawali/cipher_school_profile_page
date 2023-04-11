// userRoutes.js
const express = require("express");
const router = express.Router();
const connect = require("./database");
const bcrypt = require("bcryptjs");
const { ObjectId } = require("mongodb");

router.post("/", async (req, res) => {
  const { _id, oldPassword, newPassword } = req.body;

  try {
    const client = await connect();
    const database = client.db("UserDataBase");
    const collection = database.collection("user");

    const id = new ObjectId(_id);

    const a = await collection
      .aggregate([
        {
          $match: { _id: id },
        },
      ])
      .toArray();

    if (a.length === 0) {
      res.json({ isSuccess: false });
      return;
    } else {
      const b = await bcrypt.compare(oldPassword, a[0].user.password);
      if (!b) {
        res.json({ isSuccess: false });
        return;
      }
    }

    const salt = await bcrypt.genSalt(10);
    const EnPassword = await bcrypt.hash(newPassword, salt);

    await collection.updateOne(
      { _id: id },
      { $set: { "user.password": EnPassword } }
    );

    res.json({ isSuccess: true });
  } catch (e) {
    console.error(e);
    res.json({ isSuccess: false });
  }
});

module.exports = router;
