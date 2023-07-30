const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  videoID: { type: String, required: true, maxLength: 100 },
  url_thumbnail: { type: String, required: true, maxLength: 200},
  url_video: { type: String, required: true,maxLength: 200 },
});

module.exports = mongoose.model('videos', videoSchema);