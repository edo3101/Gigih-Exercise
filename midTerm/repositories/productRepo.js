const products = require('../models/products.js');

async function getAllProduct() {
    const getallproducts = await products.find()

    return getallproducts
}

async function getProductbyID(id) {
    const getproductsbyid = await products.findById(id).exec();

        if (products === null) {
            throw new Error(`product with id : ${id} not found`);
        }
        return getproductsbyid
}

async function getProductByVideoID(video_id) {
const getproductbyvideoid = await products.find({ video_id: video_id }).exec();

if (products === null) {
    throw new Error(`product with id : ${video_id} not found`);
}
return getproductbyvideoid
}

module.exports = {
  getAllProduct,
  getProductbyID,
  getProductByVideoID,
};