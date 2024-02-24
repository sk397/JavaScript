
const AsyncHandler = require("express-async-handler")
//npm i express-async-handler , with this we do not need to use use the try catch method for error handleing

// Importing the Mongo DB Contacts Schema model
const Contact = require("../models/contactModel")


// @description : Get All Contacts
// @route GET /api/contacts
// @access public

const getContacts =  AsyncHandler (async(req,res) => {
    const contacts = await Contact.find({user_id: req.user.id});
    res.status(200).json(contacts)
})

// @description : Get a single contact
// @route Delete /api/contacts/:id
// @access public

const GetContact = AsyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404);
        throw new Error("contact not found")
    }
    res.status(200).json(contact)
}) 





// @description : Post a contact
// @route POST /api/contacts/id
// @access public

const CreateContact = AsyncHandler(async (req,res) => {
    console.log("The request body is:", req.body);
    const {name,email,phone} = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("All fiels are required")
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id: req.user.id
    });
    res.status(201).json(contact)
}
)



// @description : Update a Contact
// @route PUT /api/contacts/id
// @access public

const UpdateContact = AsyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404);
        throw new Error("contact not found")
    }

    if(contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error ("User dont have the permssion to update other user contacts")
    }

    const UpdateContact = await Contact.findByIdAndUpdate (
        req.params.id,
        req.body,
        { new: true}

    );

    
    res.status(200).json(UpdateContact)
}) 




// @description : Delete a contacts
// @route Delete /api/contacts/id
// @access public

const DeleteContact =AsyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404);
        throw new Error("contact not found")
    }

    
    if(contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error ("User dont have the permssion to update other user contacts")
    }

    await Contact.deleteOne({_id: req.params.id});
    res.status(200).json(contact);
});




module.exports = {getContacts, CreateContact, UpdateContact, GetContact, DeleteContact}