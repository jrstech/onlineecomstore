const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // await mongoose.connect("mongodb://127.0.0.1:27017/ecomstore");
    await mongoose.connect("mongodb+srv://jrscomputers1515:JTwvpgGBbFkw3Wrc@jrs.zwaq5zf.mongodb.net/");
    console.log('Connected to the database!!');
  } catch (error) {
    console.error('Failed to connecat to the database:', error);
  }
};

module.exports = connectDB;


// database password   JTwvpgGBbFkw3Wrc
