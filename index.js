// index.js
// where your node app starts

// init project
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { dirname } from "path";
import { fileURLToPath } from "url";

dotenv.config();
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

// Challenge API endpoint...
app.get("/api/whoami", (req, res) => {
  const { ip, headers } = req;
  res.json({
    ipaddress: ip,
    language: headers["accept-language"],
    software: headers["user-agent"],
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Your app is listening on port http://localhost:" + listener.address().port
  );
});
