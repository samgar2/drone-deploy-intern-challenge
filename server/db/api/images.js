const express = require('express');
const router = express.Router();

const { getAllImages} = require('../db/sqlHelperFunctions/images');

// GET - /api/ - get all images
router.get('/', async (req, res, next) => {
    try {
        const images = await getAllImages();
        res.send(images);
    } catch (error) {
        next(error);
    }
});

module.exports = router;