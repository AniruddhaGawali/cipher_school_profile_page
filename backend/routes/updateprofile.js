// userRoutes.js
const express = require("express");
const router = express.Router();
const connect = require("./database");
const { ObjectId } = require("mongodb");

router.post("/", async (req, res) => {
  const { _id, aboutme, social, prof_info } = req.body;

  try {
    const id = new ObjectId(_id);
    const client = await connect();
    const database = client.db("UserDataBase");
    const collection = database.collection("user");

    const a = await collection.updateMany(
      { _id: id },
      {
        $set: {
          aboutme: aboutme,
          "social_links.facebook": social.facebook,
          "social_links.twitter": social.twitter,
          "social_links.instagram": social.instagram,
          "social_links.linkedin": social.linkedin,
          "social_links.github": social.github,
          "social_links.website": social.website,
          "Professional_info.highest_education ": prof_info.highest_education,
          "Professional_info.current_education": prof_info.current_education,
        },
      }
    );

    if (a.modifiedCount === 0) {
      res.json({ isSuccess: false });
      return;
    } else {
      res.json({ isSuccess: true });
    }
  } catch (e) {
    console.error(e);
    res.json({ isSuccess: false });
  }
});

module.exports = router;
