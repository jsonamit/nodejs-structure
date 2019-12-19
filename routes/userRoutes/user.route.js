const express = require('express');

const route = express.Router();
const controller = require('../../controller/userController/user.controller');

route.get('/', controller.getuser);
route.post('/getuserAndaddess', controller.getuserAndaddess);
route.post('/adduser', controller.adduser);
route.post('/deleteuser', controller.deleteuser);
route.post('/getuserById', controller.getuserById);
route.post('/updateuser', controller.updateuser);

module.exports = route;
