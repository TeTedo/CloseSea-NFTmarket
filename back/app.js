const express = require("express");
const app = express();
const cors = require("cors");
const metaData = require("./metadata/_metadata.json");
const options = {
  origin: "http://localhost:3000",
};
app.use(cors(options));
app.use(express.json());

app.get("/metaData/:tokenId", (req, res) => {
  const { tokenId } = req.params;
  res.send(JSON.parse(JSON.stringify(metaData))[tokenId]);
});

app.listen(8000, () => {
  console.log("server start");
});
