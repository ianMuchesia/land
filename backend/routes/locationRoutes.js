const express = require('express')
const { createLocation, getAllLocations } = require('../controllers/locationController')


const router = express.Router()


router.post('/', createLocation)
router.get('/', getAllLocations)



module.exports = router