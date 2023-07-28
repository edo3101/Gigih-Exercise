const videoRepo = require('../repositories/videoRepo.js');

async function getAllVideoService() {
  return videoRepo.getAllVideo()
}

async function getVideoByIdService(videoID) {
    return videoRepo.getVideobyID(videoID)
  }  

module.exports = {
  getAllVideoService,
  getVideoByIdService
};