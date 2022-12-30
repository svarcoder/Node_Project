/** @format */

const express = require("express");
const { addUser, userLogin } = require("../Controller/Login/LoginController");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { myValidations } = require("../Validator/Validator");

const storageDestination = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "./Public");
	},
	filename: function (req, file, cb) {
		cb(
			null,
			file.fieldname + "-" + Date.now() + path.extname(file.originalname)
		);
	},
});
const upload = multer({ storage: storageDestination });

router.post(
	"/api-user-singup",
	upload.fields([{ name: "profileImage", maxCount: 1 }]),
	myValidations,
	addUser
);
router.post("/api-user-login", userLogin);

module.exports = router;
