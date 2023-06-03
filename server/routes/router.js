const express = require('express');
const { homeRoutes, addUserRoutes, updateUserRoutes } = require('../services/render');
const route=express.Router();

route.get("/",homeRoutes);
route.get("/add-user",addUserRoutes);
route.get("/update-user",updateUserRoutes)

module.exports =route