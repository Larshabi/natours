const fs = require('fs');
const path = require('path');
const Tour = require('../models/tour');

// const tours = JSON.parse(fs.readFileSync(path.resolve(__dirname, './../dev-data/data/tours-simple.json')));
const TourController = {
    async getAllTours(req, res) {
        try {
            const queryObj = {...req.query }
            const excludedFields = ['page', 'sort', 'limit', 'fields']
            excludedFields.forEach(e => delete queryObj[e])
            const query = Tour.find(queryObj)
            const tours = await query;
            res.status(200).json({
                status: 'success',
                results: tours.length,
                data: {
                    tours
                }
            })
        } catch (err) {
            res.status(404).json({
                status: 'fail',
                message: err
            })
        }

    },
    async getTour(req, res) {
        try {
            const id = req.params.id
            const tour = await Tour.findById(id)
            res.status(200).json({
                status: 'success',
                data: {
                    tour
                }
            })
        } catch (err) {
            res.status(404).json({
                status: 'fail',
                message: err
            })
        }
    },
    async createTour(req, res) {
        try {

            const newTour = await Tour.create(req.body)
            return res.status(201).json({
                status: 'success',
                data: {
                    tour: newTour
                }
            })
        } catch (err) {
            res.status(400).json({
                status: 'fail',
                message: err
            })
        }

    },
    async updateTour(req, res) {
        try {
            const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            return res.status(201).json({
                status: 'success',
                data: {
                    tour
                }
            })
        } catch (err) {
            res.status(400).json({
                status: 'fail',
                message: err
            })
        }
    },
    async deleteTour(req, res) {
        try {
            await Tour.findByIdAndDelete(req.params.id)
            return res.status(201).json({
                status: 'success'
            })
        } catch (err) {
            res.status(400).json({
                status: 'fail',
                message: err
            })
        }
    }
}

module.exports = TourController;