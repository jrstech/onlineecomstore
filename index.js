const express = require('express');
const connectDB = require('./database/config');
const User = require('./database/User');
const cors = require('cors');                       // cores api problem 
const app = express();
const PORT = 5000;

app.use(express.json());

app.use(cors());   // cors middelware

app.post("/register", async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    resp.send(result);
   
});

app.delete("/name", async (req, resp) => {
    const { name } = req.body;
        const result = await User.find({name });
        resp.send(result);
        console.log(result)
});

app.get("/name", async (req, resp) => {
    const { name } = req.body;
        const result = await User.find({name });
        resp.send(result);
        console.log(result)
});


app.listen(PORT, () => {
    connectDB(); // Connect to the database
    console.log(`Server is running on ${PORT}`);
});
