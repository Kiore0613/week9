const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(`${__dirname}/dist/week9`));
app.get("*", (_, res) =>
  res.sendFile(path.join(__dirname, "/dist/week9/index.html"))
);
app.listen(process.env.PORT || 8081);
