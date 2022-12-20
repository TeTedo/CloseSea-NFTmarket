const express = require("express");
const app = express();
const cors = require("cors");
const options = {
  origin: "http://localhost:3000",
};
app.use(cors(options));

app.listen(process.env.PORT, () => {
  console.log("server start");
});
