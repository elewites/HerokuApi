const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

app.get("/getdata", (req, res) => {
  res.json({
    this: "is",
    the: "first",
    api: "that",
    i: "deploy",
    in: "a cloud Paas",
  });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
