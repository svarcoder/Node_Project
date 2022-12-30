/** @format */

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			default: "",
			required: true,
		},
		lastName: {
			type: String,
			default: "",
			required: true,
		},
		email: {
			type: String,
			default: "",
			required: true,
		},
		password: {
			type: String,
			default: "",
			requird: true,
		},
		confirmPassword: {
			type: String,
			default: "",
			requird: true,
		},
		profileImage: {
			type: String,
			default: "",
			requird: true,
		},
		termCondition: {
			type: Boolean,
			default: false,
			requird: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
