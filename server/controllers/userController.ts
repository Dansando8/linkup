// Below is some boilerplate data which will be changed once DB and models are there
// LEGEND :
// 🚀🚀🚀 = New section
// ✅ = To be included in MVP
// 🅱️ = Expect request body
// 🅿️ = Expect Params (eg. Id)
// --------------------------------------------------------
// IMPORTS
// const UserModel = require('../models/modelName1')
const bcrypt = require('bcrypt');
// --------------------------------------------------------
// 🚀🚀🚀 LOGIN CONTROLLERS 🚀🚀🚀

// Login 🅱️ ✅
async function login(req, res) {
  try {

  } catch (err) {

  }
}

// Logout ✅
function logout(req, res) {
  try {

  } catch (err) {

  }
}
// --------------------------------------------------------
// 🚀🚀🚀 USER CONTROLLERS 🚀🚀🚀

// Create 1 user 🅱️ ✅
async function createUser(req, res) {
  try {
    // destructure req.body
    // check if user exists
    // if user exists, send status 409
    // hash password
    // store user in DB
    // send JWToken / session cookie

  } catch (err) {

  }
}

// Get 1 user by ID 🅿️ ✅
async function getUserById(req, res) {
  try {

  } catch (err) {

  }
}

// Get all users
async function getAllUsers(req, res) {
  try {

  } catch (err) {

  }
}

// Edit 1 user by ID 🅱️ 🅿️
async function editUser(req, res) {
  try {

  } catch (err) {

  }
}

// Delete 1 user by ID 🅿️
async function deleteUser(req, res) {
  try {

  } catch (err) {

  }
}

// Add friend 🅿️
// async function to be added !

// Remove friend 🅿️
// async function to be added !

// --------------------------------------------------------
// 🚀🚀🚀 EXPORTS 🚀🚀🚀
// module.exports = {
//   createUser, getUserById, getAllUsers, editUser, deleteUser,
// };
// --------------------------------------------------------
