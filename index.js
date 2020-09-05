const express = require("express");
const mockApiController = require("./controllers/mockApi.controller");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res, next) => {
  res.write("Hello Nodejs!!");
  res.end();
});

app.use("/mock", mockApiController);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
