const express = require("express");

const { authorizePermission, authenticateUser } = require("../middleware/authentication");
const { createWishList, getWishlist, removeItemFromWishList } = require("../controllers/wishlistController");

const router = express.Router();

router.post("/",authenticateUser, createWishList);
router.get("/",authenticateUser, getWishlist);
router.delete("/:id",authenticateUser, removeItemFromWishList )

module.exports = router;
