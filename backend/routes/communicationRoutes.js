const express = require('express')
const { sms, phoneCall, whatsapp, getAllRequests} = require('../controllers/communicationController')

const router = express.Router()


router.post('/sms', sms)
router.post('/phone', phoneCall)
router.post('/whatsapp', whatsapp)
router.get('/', getAllRequests)



module.exports = router