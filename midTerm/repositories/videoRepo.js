const Video = require('../models/video.js');

async function getAllVideo() {
    const getallvideos = await Video.find()

    return getallvideos
}

async function getVideobyID(videoID) {
    const videoById = await Video.find(videoID)

    return videoById
}

module.exports = {
  getAllVideo,
  getVideobyID,
};