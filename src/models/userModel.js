import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    Email : {
        type : String,
        required : true
    },
    Password: {
        type : String,
        required : true
    }
})

export const User = mongoose.model(`User`,userSchema);