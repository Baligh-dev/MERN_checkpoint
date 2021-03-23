const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());
const connectDB = require("./config/connectDB");
connectDB();
const router = require("./routes/contact");
app.use("/api/contacts", router);
const PORT = process.env.PORT;

app.listen(PORT, (error) => {
  error
    ? console.error(`Failed to connect to server!!! ${error}`)
    : console.log(`Server is running on port ${PORT}...`);
});
