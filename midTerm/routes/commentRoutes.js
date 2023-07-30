const express = require('express');

const commentController = require('../controllers/commentController.js');

const router = express.Router();

router.post('/comments', commentController.create);
router.get('/videos/:video_id/comments', commentController.findByVideoId);
router.get('/comments/:id', commentController.findById);
router.get('/comments', commentController.findAll);

module.exports = router;