const comment = require('../models/comment.js');

async function getAllComment() {
    const getAllComment = await comment.find()

    return getAllComment
}

async function getCommentById(id) {
    const getcommentbyid = await comment.findById(id).exec()

    return getcommentbyid
}

async function getCommentByVideoId(video_id) {
    const getcommentbyvideoid = await comment.find({video_id: video_id}).exec()

    if (getcommentbyvideoid === null) {
        throw new Error(`comment with id : ${video_id} not found`);
    }

    return getcommentbyvideoid
}

async function create(comment) {
    const comments = await comment.create(comment);

    return comments
}


module.exports = { 
    getAllComment,
    getCommentById,
    getCommentByVideoId, 
    create 
};