// userRoutes.js
const express = require("express");
const router = express.Router();
const connect = require("./database");
const bcrypt = require("bcryptjs");

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const client = await connect();
    const database = client.db("UserDataBase");
    const collection = database.collection("user");

    const data = await collection
      .aggregate([
        {
          $match: { "user.email": email },
        },
      ])
      .toArray();

    if (data.length === 0) {
      res.json({ isSuccess: false });
      return;
    } else {
      const b = await bcrypt.compare(password, data[0].user.password);
      if (!b) {
        res.json({ isSuccess: false });
        return;
      }
    }

    res.json({ isSuccess: true, data: data[0] });
  } catch (e) {
    console.error(e);
    res.json({ isSuccess: false });
  }
});

module.exports = router;
