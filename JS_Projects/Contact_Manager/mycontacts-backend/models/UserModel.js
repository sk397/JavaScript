const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    username:{
        type: String,
        required: [true, "Please add a user name"]
    },
    email: {
        type: String,
        required: [true, "Please add the user email id"],
        unique: [true, "Email Address already taken"]
    },
    password: {
        type: String,
        required: [true, "Please add password for the account"]
    }

},
 {
    timestamps: true,

 }
)

module.exports = mongoose.model('User', UserSchema);