const express = require("express");
const app = express();

app.use((req, res, next) => {
  if (req.headers["content-type"] === "application/json") {
    req.on("data", (data) => {
      console.log(data.toString());
      const info = JSON.parse(data.toString());
      req.body = info;
    });
    req.on('end', () => {
        res.end("wlecome")
        next();
    })
  }
  else {
    next();
  }
});

app.post("/login", (req, res, next) => {
    console.log(req.body);
});

app.post("/product", (req, res, next) => {
  req.on("data", (data) => {
    console.log(data.toString());
  });
  req.on("end", () => {
    res.end("upload product info success");
  });
});

app.listen(8000, () => {
  console.log("success");
});
