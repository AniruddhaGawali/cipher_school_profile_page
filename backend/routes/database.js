// database.js
const { MongoClient } = require("mongodb");
require("dotenv").config();

const client = new MongoClient(process.env.DB_URL);

async function connect() {
  try {
    await client.connect();
    return client;
  } catch (e) {
    console.error(e);
  }
}

module.exports = connect;
