const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    user: { type: String, required: true },
    videoUrl: { type: String, required: true },
    caption: String,
    date: Date
});

const Post = mongoose.model('Posts', postSchema);

module.exports = Post;