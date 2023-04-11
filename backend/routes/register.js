// userRoutes.js
const express = require("express");
const router = express.Router();
const connect = require("./database");
const bcrypt = require("bcryptjs");

router.post("/", async (req, res) => {
  const { firstname, lastname, email, phone, password } = req.body;

  try {
    const client = await connect();
    const database = client.db("UserDataBase");
    const collection = database.collection("user");
    const salt = await bcrypt.genSalt(10);
    const EnPassword = await bcrypt.hash(password, salt);

    const user = {
      user: { firstname, lastname, email, phone, password: EnPassword },
      aboutme: "",
      social_links: {
        facebook: "",
        twitter: "",
        instagram: "",
        linkedin: "",
        github: "",
        website: "",
      },
      Professional_info: {
        highest_education: "",
        current_education: "",
      },
      interests: [],
      followers: [],
      following: [],
    };

    const data = await collection
      .aggregate([
        {
          $match: { "user.email": email },
        },
      ])
      .toArray();

    if (data.length !== 0) {
      res.json({ isSuccess: false, exist: true });
      return;
    }

    await collection.insertOne(user);

    res.json({ isSuccess: true });
  } catch (e) {
    console.error(e);
    res.json({ isSuccess: false });
  }
});

module.exports = router;
