const express = require('express');
const { homeRoutes, addUserRoutes, updateUserRoutes } = require('../services/render');
const { find, create, update, remove } = require('../controller/controller');
const route=express.Router();

route.get("/",homeRoutes);
route.get("/add-user",addUserRoutes);
route.get("/update-user",updateUserRoutes)

// API 
route.post("/api/users",create)
route.get("/api/users",find)
route.put("/api/users/:id",update)
route.delete("/api/users/:id",remove)

module.exports =route