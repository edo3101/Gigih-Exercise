const videos = require('../models/video.js');

async function getAllVideo() {
    const getallvideos = await videos.find()

    return getallvideos
}

async function getVideobyID(videoID) {
    const videoById = await videosfind(videoID)

    return videoById
}

module.exports = {
  getAllVideo,
  getVideobyID,
};