const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model')
const productRoute = require('./routes/product.route')  
const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//
app.use("/api/products", productRoute); 


 

app.get('/', (req,res) => {
    res.send("Hello from Node API Server Updated"); 
});
 


mongoose.connect("mongodb+srv://yvanpavlovejeff:pavlove@backenddb.4gjit.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
  .then(() => {
    console.log("Connected to database!");
    app.listen(2004,()=>{
        console.log('Server is running on port 2004')  
    });
  })
  .catch(() =>{
    console.log("Connection failed");
  })