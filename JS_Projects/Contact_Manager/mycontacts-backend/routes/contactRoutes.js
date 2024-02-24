// Routing configuration file

const express = require("express");
const router = express.Router();
const {getContacts, CreateContact, UpdateContact, GetContact, DeleteContact} = require ("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

// this will validate all the rotes using the access token
router.use(validateToken)

// We have create the routes for GET, PUT, POST and DELETE for the API
router.route('/').get(getContacts).post(CreateContact)

router.route('/:id').put(UpdateContact).delete(DeleteContact).get(GetContact)


module.exports = router;