const express = require("express");
const { register, login, showUser, logout } = require("../controllers/authController");
const { authorizePermission, authenticateUser } = require("../middleware/authentication");

const router = express.Router();



router.post('/register', register)
router.post('/login', login)
router.get('/showUser',authenticateUser, showUser)
router.get('/logout',authenticateUser, logout)

module.exports = router;