const express = require("express");
const connectDB = require("./database/config");
const User = require("./database/User");
const Product = require("./database/Product");
const Student = require("./database/Students")

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

// student registration  ============================
app.post("/studentregistration", async (req, resp) => {
  // console.log(req.body)
  let student = new Student(req.body);
  let result = await student.save();
  result = result.toObject();
  delete result.password;
  resp.send(result);
});

//  login api development here fetch from databse ================================
app.post("/login", async (req, resp) => {
  // console.log(req.body);
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      resp.send(user);
    } else {
      resp.send({ result: "Recard Not Found" });
    }
  } else {
    resp.send({ result: "Recard Not Found" });
  }
});

// product linsting api ========================
app.post("/addproduct", async (req, resp) => {
  let product = new Product(req.body);
  let result = await product.save();
  resp.send(result);
});

// product data fetch from databse ===================
app.get("/productlist", async (req, resp) => {
  let products = await Product.find();
  if (products.length > 0) {
    resp.send(products);
  } else {
    resp.send({result: "No Products Found" });
  }
});
// student list fetch from the database =============================================
app.get("/studentlist", async (req, resp) => {
  let students = await Student.find();
  // console.log("this is fetch result", students)
  if(students.length > 0) {
    resp.send(students);
  } else {
    resp.send({result: "No Student Found"})
  }
})

// deleted api =============

app.delete("/product/:id", async (req, resp) => {
  const result = await Product.deleteOne({ _id: req.params.id });
  resp.send(result);
});

// update api ============
app.put("/product/:id", async (req, resp) => {
  const result = await Product.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  resp.send(result);
});

// update product fetch api =============
app.get("/product/:id", async (req, resp) => {
  const result = await Product.findOne({ _id: req.params.id });
  if (result) {
    resp.send(result);
  } else {
    resp.send({ result: "No Reacd Found" });
  }
});
//search by name api

app.get("/search/:key", async (req, resp) => {
  const result = await Product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
      { company: { $regex: req.params.key } }
    ]
  });
  resp.send(result);
});

//search by name api developed here
app.get("/studentsearch/:key", async (req, resp) => {
  const result = await  Student.find({
    $or: [
      {fullname: {$regex: req.params.key}},
      {fathername: {$regex: req.params.key}},
      {mothername: {$regex: req.params.key}}
    ]
  });
  resp.send(result)
})

app.listen(PORT, () => {
  connectDB(); // Connect to the database
  console.log(`Server is running on ${PORT}`);
});
