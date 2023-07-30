const productService = require("../services/productService.js")
const mongoose = require('mongoose')

async function findAll(req, res)  {
    try {

        const products = await productService.getAllProductService();

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

async function findById(req, res) {
    try {
        const { id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error(`${id} is not a ObjectId format in Mongo`);
        }

        const products = await productService.getProductByIdService(id);


        res.status(200).json(products);

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

        const products = await productService.getProductByVideoIdService(video_id);
S
        res.status(200).json(products);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    findAll,
    findById, 
    findByVideoId
};