const { request } = require('express');
const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// CALLING CORS
app.use(cors());

// BASE API CALL
app.get('/', (req, res) => {
    res.send('Data API is running');
});

// ------ USERS ------
// LOADING USER DATA
const users = require('./data/users.json');

// GET USERS
app.get("/users", (req, res) => {
    res.json(users);
});

// GET USER
app.get("/users/:id", (req, res) => {
    const user = users.find((user) => user.id === parseInt(req.params.id));
    res.json(user);
});

// ADD USER
app.post("/users", (req, res) => {
    users.unshift(req.body)
    res.json(users);
});
  
// DELETE USER
app.delete("/users/:id", (req, res) => {
    users = users.filter((user) => user.id !== parseInt(req.params.id));
    res.json("User deleted!");
});

// ------ PRODUCTS ------
// LOADING PRODUCTS DATA
const products = require('./data/products.json');

// GET PRODUCTS
app.get("/products", (req, res) => {
    res.json(products);
  });
  
// GET PRODUCT
app.get("/products/:id", (req, res) => {
    const product = products.find((product) => product.id === parseInt(req.params.id));
    res.json(product);
});
  
// ADD PRODUCT
app.post("/products", (req, res) => {
    products.unshift(req.body)
    res.json(products);
});
  
// DELETE PRODUCT
app.delete("/products/:id", (req, res) => {
    products = products.filter((product) => product.id !== parseInt(req.params.id));
    res.json("Product deleted!");
});

// RUNNING THE SERVER
app.listen(port, () => {
    console.log('Server running on port-',port);
})
