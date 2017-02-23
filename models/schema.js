// Require mongoose
var mongoose = require("mongoose");

// Create the Schema class
var Schema = mongoose.Schema;

// Instantiate a new Schema, UserSchema
var ArticleSchema = new Schema({
    // username: a required, trimmed string
    title: {
        type: String,
        trim: true,
        required: "Title is Required"
    },
    // password: a required, trimmed string that's 6 characters or longer
    link: {
        type: String,
        trim: true,
    }
});

module.exports = ArticleSchema;