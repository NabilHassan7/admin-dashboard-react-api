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

// ------ ORDERS ------
// LOADING ORDER DATA
let orders = require('./data/orders.json');

// GET USERS
app.get("/orders", (req, res) => {
    res.json(orders);
});

// GET USER
app.get("/orders/:id", (req, res) => {
    const order = orders.find((order) => order.id === parseInt(req.params.id));
    res.json(order);
});

// ADD USER
app.post("/orders", (req, res) => {
    users.unshift(req.body)
    res.json(orders);
});
  
// DELETE USER
app.delete("/orders/:id", (req, res) => {
    orders = orders.filter((order) => order.id !== parseInt(req.params.id));
    res.json("Order deleted!");
});

// ------ RECENT ORDERS ------
// LOADING ORDER DATA
let recentOrders = require('./data/recentOrders.json');

// GET RECENT ORDERS
app.get("/recentOrders", (req, res) => {
    res.json(recentOrders);
});

// ------ TOTAL USERS------
// LOADING TOTAL USERS DATA
let totalUsers = require('./data/totalUsers.json');

// GET TOTAL USERS
app.get("/totalUsers", (req, res) => {
    res.json(totalUsers);
});

// ------ TOTAL PRODUCTS------
// LOADING PRODUCT DATA
let totalProducts = require('./data/totalProducts.json');

// GET PRODUCT DATA
app.get("/totalProducts", (req, res) => {
    res.json(totalProducts);
});

// ------ TOTAL REVENUE------
// LOADING REVENUE DATA
let totalRevenue = require('./data/totalRevenue.json');

// GET REVENUE DATA
app.get("/totalRevenue", (req, res) => {
    res.json(totalRevenue);
});

// ------RATIO------
// LOADING RATIO DATA
let ratio = require('./data/ratio.json');

// GET RATIO DATA
app.get("/ratio", (req, res) => {
    res.json(ratio);
});

// ------TOTAL VISITORS------
// LOADING TOTAL VISITORS
let totalVisitors = require('./data/totalVisitors.json');

// GET TOTAL VISITORS DATA
app.get("/totalVisitors", (req, res) => {
    res.json(totalVisitors);
});

// ------TOTAL PROFIT------
// LOADING TOTAL PROFIT
let totalProfit = require('./data/totalProfit.json');

// GET TOTAL PROFIT DATA
app.get("/totalProfit", (req, res) => {
    res.json(totalProfit);
});

// RUNNING THE SERVER
app.listen(port, () => {
    console.log('Server running on port-',port);
})
