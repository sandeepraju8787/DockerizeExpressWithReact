const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
//Array of products
const products = ["Verna", "Honda City", "Mercedez", "Bmw", "Skoda"];

app.use(cors());

//Define a route for GET method
app.get("/products", (req, res) => {
  res.json(products);
});

//Start the server
app.listen(3000, () => {
  console.log(`Server is listening at port : ${port}`);
});
