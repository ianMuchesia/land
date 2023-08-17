const express = require("express");
const {
 
  getSingleProperty,
  createProperty,
  deleteProperty,
  getAllProperties,
  updateProperty,
  updateImage,
} = require("../controllers/propertyController");
const { authorizePermission, authenticateUser } = require("../middleware/authentication");

const router = express.Router();

router.get("/", getAllProperties);
router.get("/:id", getSingleProperty);
router.post("/", createProperty);
router.patch("/:id",updateProperty)
router.patch("/image/:id",updateImage)
router.delete("/:id",deleteProperty )

module.exports = router;
