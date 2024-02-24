const express = require("express");
const { registerUser, LoginUser, CurrentUser } = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

// Register the user
router.post("/register", registerUser)


// Check the login of the user
router.post("/login", LoginUser)

// Get the current user
router.get("/current", validateToken, CurrentUser)


module.exports = router;