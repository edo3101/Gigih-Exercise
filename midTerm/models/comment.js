const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    username: { type: String, required: true, maxLength: 100 },
    comment: { type: String, required: true, maxLength: 100 },
    video_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "videos",
        required: true
    },
});

module.exports = mongoose.model('products', prodcutSchema);