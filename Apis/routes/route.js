var express = require('express')
var routes = express.Router()
var controller = require('../controller/login')
type = controller.login()
routes.post('/login',type.login)

module.exports = routes