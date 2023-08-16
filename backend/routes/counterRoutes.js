const express = require("express")
const { counter } = require("../controllers/countController")

const router = express.Router()


router.get("/", counter)



module.exports = router