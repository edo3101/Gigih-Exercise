const productsRepo = require("../repositories/productRepo.js")

async function getAllProductService() {
  return productsRepo.getAllProduct()
}
  
async function getProductByVideoIdService(video_id) {
  return productsRepo.getProductByVideoID(video_id)
}  
  
async function getProductByIdService(id) {
  return productsRepo.getProductbyID(id)
}  

module.exports = {
  getAllProductService,
  getProductByIdService,
  getProductByVideoIdService,
}