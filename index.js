const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js')
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/api/products', productRoute);


app.get('/', (req, res) => {
    res.send("Hello from nodejs api Server 123");
});

// app.get('/api/products', async (req, res) => {
//     try {
//         const products = await Product.find({});
//         res.status(200).json(products);
//     } catch (error) {
//        res.status(500).json({message: error.message}) ;
//     }
// });

// app.get('/api/products/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });


// app.post('/api/products', async (req, res) => {
//     try {
//         const product = await Product.create(req.body);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });


// //Update a product
// app.put('/api/products/:id', async (req, res) => {
//     try {
//         const {id} = req.params;
//         const product = await Product.findByIdAndUpdate(id, req.body);

//         if(!product){
//             res.status(404).json({message: "Product not found"});
//         }

//         const updateProduct = await Product.findById(id);
//         res.status(200).json(updateProduct);
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });

// //Delete a product
// app.delete('/api/products/:id', async (req, res) => {
//     try {
//         const {id} = req.params;
//         const product = await Product.findByIdAndDelete(id, req.body);

//         if(!product){
//             res.status(404).json({message: "Product not found"});
//         }
//         res.status(200).json({message: "Product deleted successfully"});
//     } catch (error) {
//         res.status(500).json({message: error.message});
//     }
// });

mongoose.connect("mongodb+srv://imon0077:9aQ8DO4HqwL7ipcX@backenddb.dbb0v.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to the database!");
    app.listen(3000, ()=>{
        console.log("server is running on port 3000");
    });
})
.catch(() => {
    console.log("Connection failed");
})