const commentRepo = require("../repositories/commentRepo.js")

async function getAllCommentService() {
  return commentRepo.getAllComment()
}
  
async function getCommentByIdService(id) {
  return commentRepo.getCommentById(id)
}  
  
async function getCommentByVideoIdService(video_id) {
  return commentRepo.getCommentByVideoId(video_id)
}  

async function CreateCommentService(comment) {
    return commentRepo.create(comment)
  }  

module.exports = {
  getAllCommentService,
  getCommentByIdService,
  getCommentByVideoIdService,
  CreateCommentService
}