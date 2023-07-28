const videoService = require('../services/videoService.js');

async function getAllVideo(req, res) {
  try {
    const video = await videoService.getAllVideoService()
    res.status(200).json(video);
    console.log(video)
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch video.' });
  }
}

async function getVideoById(req, res) {
    try {
        const videoID = req.params
        const video = await videoService.getVideoByIdService(videoID)
        if(video.length === 0) {
            return res.status(404).json({
                message: "Video not found!",
            });
        }
        res.status(200).json(video);
        console.log(video)
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch video.' });
    }
  }

module.exports = {
  getAllVideo,
  getVideoById,
};