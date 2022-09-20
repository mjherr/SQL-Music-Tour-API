//DEPENDENCIES
const { Op } = require('sequelize')
const stages = require('express').Router()
const db = require('../models')
const { Stage } = db

//FIND ALL EVENTS
stages.get('/', async (req, res) => {
    try {
        const foundStages = await Stage.findAll({
            order: [ [ 'available_start_time', 'ASC'] ],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        })
        res.status(200).json(foundStages)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = stages