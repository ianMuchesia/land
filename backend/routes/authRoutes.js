const express = require("express");
const { register, login, showUser, logout, showAdmin, loginAdmin, google } = require("../controllers/authController");
const { authorizePermission, authenticateUser } = require("../middleware/authentication");

const router = express.Router();



router.post('/register', register)
router.post('/login', login)
router.post('/google', google)
router.post('/loginAdmin', loginAdmin)
router.get('/showUser',authenticateUser, showUser)
router.get('/logout',authenticateUser, logout)
router.get('/showAdmin',authenticateUser,authorizePermission('admin'), showAdmin)

module.exports = router;