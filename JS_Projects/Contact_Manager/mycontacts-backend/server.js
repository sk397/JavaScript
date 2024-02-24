//Tutorial Link: https://www.youtube.com/watch?v=H9M02of22z4&ab_channel=DipeshMalvia

// Creating a express server
// npm install express
// install nodemon as dev dependecy [np, -i -D nodemon]
// Change script.js in the main variable
// then Add "start":"node server.js" and "dev": "nodemon server.js" in package json file in the scripts
// To start the nodemon and start the dev - do a "npm run dev" in the terminal to start the node server
// We do the (npm o dotenv) to install the .env package | The new Port is mentioned in the .env file  
// console.log("I am in the express project");

const express = require("express");
const errorHandler = require("../mycontacts-backend/middleware/errorHandeler");
const dotenv = require("dotenv").config();
const app = express()
const connectDB = require("./config/ConnectDB");

connectDB()

// const port = 5000; // This is a static server for now // Other server port is menitoned in the .env file
const port = process.env.PORT || 5000;

//We will listen on the app which is the express, which wil take the port and then a callback function
// We have installed the Thunder exprension to test the API in the Vs code itself
// We are getting up the GET API Method below

//Using the app use to parse json in the body of the api request
app.use(express.json());

// app.use() is called a middleware
app.use("/api/contacts", require("./routes/contactRoutes"));


// Authentication User Route
app.use("/api/users", require("./routes/UserRoutes"));


// app.use to use the errorhandler middleware
app.use(errorHandler)




app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})


