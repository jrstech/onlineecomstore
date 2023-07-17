const express = require("express");
const connectDB = require("./database/config");
const User = require("./database/User");
const Product = require("./database/Product");

const cors = require("cors"); // cores api problem
const app = express();
const PORT = 5000;

app.use(express.json());

app.use(cors()); // cors middelware

//register Api developed here==================================
app.post("/register", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  resp.send(result);
});

//  login api development here fetch from databse ================================
app.post("/login", async (req, resp) => {
console.log(req.body)
if(req.body.password && req.body.email){
    let user = await User.findOne(req.body).select("-password");
  if (user) {
    resp.send(user);
  } else {
    resp.send({result: 'Recard Not Found'});
  }
}
else {
    resp.send({result: 'Recard Not Found'});
  }
  
});

// product linsting api ========================
app.post("/addproductlisting", async (req, resp) => {
let product = new Product(req.body);
let result = await product.save();
resp.send(result)
})

// product data fetch from databse ===================
app.get('/productlist', async (req, resp) => {
  let products = await Product.find();
 if(products.length>0){
  resp.send(products)
 }else{
  resp.send({result:"No Products Found"})
 }
})

// deleted api =============

app.delete ("/product/:id", async (req, resp) => {
  const result = await Product.deleteOne({_id:req.params.id})
  resp.send(result)
})
//search by name api

app.get("/name", async (req, resp) => {
  const { name } = req.body;
  const result = await User.find({ name });
  resp.send(result);
  console.log(result);
});

app.listen(PORT, () => {
  connectDB(); // Connect to the database
  console.log(`Server is running on ${PORT}`);
});
