const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  user: {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    phone: String,
  },
  aboutme: String,
  social_links: {
    facebook: String,
    twitter: String,
    instagram: String,
    linkedin: String,
    github: String,
    website: String,
  },
  Professional_info: {
    highest_education: String,
    current_education: String,
  },
});

module.exports = userSchema;
