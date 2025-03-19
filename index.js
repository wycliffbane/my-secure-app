<<<<<<< HEAD
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Secure App!");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
=======
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
>>>>>>> 151968c5f43056517a9207eae093d16b18956270
});
