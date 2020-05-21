const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

const User = require("../models/User");

// @route POST api/users
// @desc Register a user
// access Public
router.post(
	"/",
	[
		check("name", "Please add name").not().isEmpty(),
		check("email", "Please include valid email").isEmail(),
		check(
			"password",
			"Please enter a password with 6 or more characters",
		).isLength({ min: 6 }),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { name, email, password } = req.body;
		try {
			let user = await User.findOne({ email });
			if (user) {
				return res.status(400).json({ message: "User already exists" });
			}

			const newUser = new User({
				name,
				email,
				password,
			});
			const salt = await bcrypt.genSalt(10);
			newUser.password = await bcrypt.hash(password, salt);

			await newUser.save();

			const payload = {
				user: {
					id: newUser.id,
				},
			};

			jwt.sign(
				payload,
				config.get("jwtSecret"),
				{
					expiresIn: 360000,
				},
				(err, token) => {
					if (err) throw err;
					res.json({ token });
				},
			);
		} catch (err) {
			console.log(err.message);
			res.status(500).send("Server Error");
		}
	},
);

module.exports = router;
