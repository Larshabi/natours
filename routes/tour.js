const express = require('express')
const router = express.Router()
const TourController = require('../controllers/tour');

const middleware = (req, res, next) => {
    if (!req.body.name && !req.body.price) {
        return res.json(400).json({
            status: 'fail',
            message: 'Price and name missing'
        })
    }
    next()
}

router.get('/', TourController.getAllTours)
router.get('/:id', TourController.getTour)
router.post('/', middleware, TourController.createTour)
router.patch('/:id', TourController.updateTour)
router.delete('/:id', TourController.deleteTour)

module.exports = router;