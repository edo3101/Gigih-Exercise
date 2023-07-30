const commentService = require("../services/commentService.js")
const mongoose = require('mongoose')

async function findAll(req, res) {
    try {

        const comments = await commentService.getAllCommentService()

        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

async function findById(req, res)  {
    try {
        const { id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error(`${id} is not a ObjectId format in Mongo`);
        }

        const comments = await commentService.getCommentByIdService(id);


        res.status(200).json(comments);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

async function findByVideoId(req, res) {
    try {
        const { video_id } = req.params

        if (!mongoose.Types.ObjectId.isValid(video_id)) {
            throw new Error(`${video_id} is not a ObjectId format in Mongo`);
        }

        const comments = await commentService.getCommentByVideoIdService(video_id);
        res.status(200).json(comments);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

async function create(req, res) {
    try {

        const {
            username,
            comment,
            video_id
        } = req.body;

        if (!username || !comment || !video_id) {
            throw new Error("Insufficient Parameter")
        }

        let commentCreate = {
            username: username,
            comment: comment,
            video_id: video_id
        }

        await commentService.create(commentCreate);
        res.status(201).json({ "status": "success" });
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ "status": "fail" });
    }
};

module.exports = {
    findAll,
    findById, 
    findByVideoId, 
    create
};