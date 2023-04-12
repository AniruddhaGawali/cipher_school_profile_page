const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
const port = 5000 | process.env.PORT;

dotenv.config();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/register", require("./routes/register"));
app.use("/login", require("./routes/login"));
app.use("/updateprofile", require("./routes/updateprofile"));
app.use("/changepassword", require("./routes/changepassword"));
app.use("/addintrest", require("./routes/addintrest"));
app.use("/follower_following", require("./routes/follower_following"));
app.use("/add_following", require("./routes/add_following"));
app.use("/userdata", require("./routes/getuser"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
