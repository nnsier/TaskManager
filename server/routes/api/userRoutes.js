// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const keys = require("../../config/keys");
// const validateRegisterInput = require("../../validation/register");
// const validateLoginInput = require("../../validation/login");

// router.post("/register", async (req, res) => {
//   const { errors, isValid } = validateRegisterInput(req.body);
//   console.log("look this owrks");

//   if (!isValid) {
//     return res.status(400).json(errors);
//   }

//   const user = await User.findOne({ email: req.body.email });

//   if (user) {
//     return res.status(400).json({ email: "Email already exists" });
//   } else {
//     const newUser = new User({
//       name: req.body.name,
//       email: req.body.email,
//       password: req.body.password
//     });

//     bcrypt.genSalt(10, (err, salt) => {
//       bcrypt.hash(newUser.password, salt, (err, hash) => {
//         if (err) throw err;
//         newUser.password = hash;
//         newUser
//           .save()
//           .then(user => res.json(user))
//           .catch(err => console.log(err));
//       });
//     });
//   }
// });

// router.get("/all", (req, res) => {
//   User.find()
//     .then(users => {
//       return res.status(200).json(users);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// router.post("/login", async (req, res) => {
//   console.log("this thing?");
//   const { errors, isValid } = validateLoginInput(req.body);

//   if (!isValid) {
//     return res.status(400).json(errors);
//   }

//   const { email, password } = req.body;

//   console.log(email, password);

//   User.findOne({ email }).then(user => {
//     if (!user) {
//       return res.status(404).json({ email: "User not found" });
//     }
//     bcrypt.compare(password, user.password).then(isMatch => {
//       if (isMatch) {
//         const payload = {
//           id: user.id,
//           name: user.name
//         };

//         jwt.sign(
//           payload,
//           keys.secretOrKey,
//           {
//             expiresIn: 31556926 //1 year in seconds
//           },
//           (err, token) => {
//             res.json({
//               success: true,
//               token: `Bearer ${token}`
//             });
//           }
//         );
//       } else {
//         return res
//           .status(400)
//           .json({ passwordincorrect: "Incorrect Password" });
//       }
//     });
//   });
// });

// module.exports = router;
