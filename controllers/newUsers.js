const mysql = require('mysql')
const pool = require('../sql/connection')

const getAllUsers = (req, res) => {
    pool.query("SELECT * FROM signUpUsers", (err, rows) => {
    })
  }

  module.exports = getAllUsers