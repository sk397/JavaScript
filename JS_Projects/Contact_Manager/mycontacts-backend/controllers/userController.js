const AsyncHandler = require("express-async-handler")
const User = require("../models/UserModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

// @description : Register a User
// @route Post /api/user/register
// @access private

const registerUser =  AsyncHandler (async(req,res) => {
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All the fields are mandatory");
    }
    const userAvailable = await User.findOne ({email});
    if(userAvailable){
        res.status(400);
        throw new Error("User Already Registered");
    } 

     // We can get the username and the email in raw text file, but we need to store the hashed password
     // We will use a library called bycrpt [npm i bcrypt]
    // Hashed Password
    const hashedPassword = await bcrypt.hash(password, 10);
    // console.log("Hashed Password", hashedPassword);

    // Now we will create the user
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    });

    console.log(`User Created ${user}`);
    if(user)  {
        res.status(201).json({_id: user.id, email: user.email});
    } else {
        res.status(400);
        throw new Error ("User data is not valid")
    }

    res.json({message: "Register the user"})
});


// @description : Login User
// @route Post /api/user/login
// @access private
const LoginUser = AsyncHandler (async(req, res)=> {
     const {email, password} = req.body;
     if (!email || !password) {
        res.status(400);
        throw new Error("All the fields are mandatory");
     }

     const user = await User.findOne({email});
      // Compare Password from the Database with hashed password
      if(user && (await bcrypt.compare(password, user.password))) {
        // If the password matches with the hashaed pass, we will provide the user with a access token
        // The JWT token takes in some parameters such as user parameter and seceret token that we mention in the ENV file
        const accessToken = jwt.sign({
            user:{
                username: user.username,
                email: user.email,
                id: user.id
            }
        }, process.env.ACCESS_TOKEN_SECERET,
        {expiresIn: "15m"}
        );
        res.status(200).json({accessToken});
      } else {
        res.status(401)
        throw Error ("Email or Password is not valid")
      }
})





// @description : Get Current User
// @route Post /api/user/current
// @access private
const CurrentUser = AsyncHandler (async(req, res)=> {
    res.json(req.user)
})



// We have installed the jsonwebtoken to get the login functionality for the user 
// npm i jsonwebtoken

module.exports = {registerUser, LoginUser, CurrentUser}
