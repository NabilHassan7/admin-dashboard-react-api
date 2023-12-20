const { request } = require('express');
const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

// CALLING CORS
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// BASE API CALL
app.get('/', (req, res) => {
    res.send('Data API is running');
});

// ------ USERS ------
// LOADING USER DATA
let users = require('./data/users.json');

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
let products = require('./data/products.json');

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
