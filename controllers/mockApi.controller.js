const express = require("express");

const router = express.Router();

const UserService = require("../services/UserService");

router.get("/users", getUserDetails);

async function getUserDetails(req, res) {
  const users = await UserService.getUsers();
  return res.json(users);
}

module.exports = router;
